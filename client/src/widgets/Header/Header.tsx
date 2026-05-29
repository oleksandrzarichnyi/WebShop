import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import ShopLogo from '../../shared/assets/images/logo.svg'
import CartIcon from '../../shared/assets/icons/cart-icon.svg'
import ProfileIcon from '../../shared/assets/icons/profile-icon.svg'

export default function Header() {
  return (
    <>
      <nav className={styles["nav"]}>
        <div className={styles["nav-container"]}>
          <Link to="/"><img src={ShopLogo} alt="" /></Link>
          <ul className={styles["nav-list"]}>
            <li>
              <Link className={styles["nav-link"]} to="/catalog">Shop</Link>
            </li>
            <li>
              <Link className={styles["nav-link"]} to="/catalog">About Us</Link>
            </li>
          </ul>
          <div className={styles["searchbar"]}></div>
          <div className="w-[62px] flex justify-between">
            <Link to="/cart"><img src={CartIcon} alt="" /></Link>
            <Link to="/profile"><img src={ProfileIcon} alt="" /></Link>
          </div>
        </div>
      </nav>
    </>
  )
}