import { Router, Request, Response } from 'express';
import { db } from '../db';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const { categories, priceMin, priceMax, colors, sizes, sortOrder, query: search } = req.query;

  let query = `
    SELECT DISTINCT products.* 
    FROM products
    LEFT JOIN products_sizes ON products.id = products_sizes.product_id
    WHERE 1=1
  `;
  const params: (string | number)[] = [];

  if (categories) {
    const list = (categories as string).split(',');
    const placeholders = list.map(() => '?').join(', ');
    query += ` AND category IN (${placeholders})`;
    params.push(...list); 
  }

  if (priceMin) {
    query += ' AND price >= ?';
    params.push(Number(priceMin));
  }

  if (priceMax) {
    query += ' AND price <= ?';
    params.push(Number(priceMax));
  }

  if (colors) {
    const list = (colors as string).split(',');
    const placeholders = list.map(() => '?').join(', ');
    query += ` AND color IN (${placeholders})`;
    params.push(...list)
  }

  if (sizes) {
    const list = (sizes as string).split(',');
    const placeholders = list.map(() => '?').join(', ');
    query += ` AND products_sizes.size IN (${placeholders})`;
    params.push(...list)
  }

  if (sortOrder === 'price_asc') {
    query += ' ORDER BY products.price ASC';
  } else if (sortOrder === 'price_desc') {
    query += ' ORDER BY products.price DESC';
  }

  if (search) {
    query += ' AND products.name LIKE ?';
    params.push(`%${search}%`);
  }

  const [rows] = await db.execute(query, params);
  res.json(rows)
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const [rows] = await db.execute<any[]>(
    'SELECT * FROM products WHERE id = ?',
    [Number(id)]
  );

  if (rows.length === 0) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  res.json(rows[0]);
});

export default router;