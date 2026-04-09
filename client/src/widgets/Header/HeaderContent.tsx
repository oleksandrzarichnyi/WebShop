import styles from './HeaderContent.module.scss'
import ZaraLogo from '../../shared/assets/images/zara.svg'
import PradaLogo from '../../shared/assets/images/prada.svg'
import VersaceLogo from '../../shared/assets/images/versace.svg'
import CalvinKleinLogo from '../../shared/assets/images/calvinklein.svg'
import GucciLogo from '../../shared/assets/images/gucci.svg'

export default function HeaderContent() {
  return (
    <>
      <div className={styles["header-bg"]}>
        <div className="container-default">
          <div className={styles["header-content"]}>
            <p className={styles["header-title"]}>
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </p>
            <p className={styles["header-info"]}>
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["header-brands"]}>
        <div className="container-default">
          <div className={styles["header-brands--container"]}>
            <img src={VersaceLogo} alt="" />
            <img src={ZaraLogo} alt="" />
            <img src={GucciLogo} alt="" />
            <img src={PradaLogo} alt="" />
            <img src={CalvinKleinLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}