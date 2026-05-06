const BASE_URL = 'http://localhost:3001';

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}