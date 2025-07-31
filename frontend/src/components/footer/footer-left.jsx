import logo from "../../assets/images/logo-footer.svg";
import Menu from "../../ui/Menu/Menu";
import styles from "./Footer.module.css";
function Footerleft() {
  const settingsLogo = {
    width: 215,
    height: 176,
  };
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer_left}>
      <div className={styles.footer_left_top}>
        <a href="/" className={styles.logo}>
          {/* <img src={logo} alt="Klot" {...settingsLogo} /> */}
        </a>

        <Menu direction={true} />
      </div>

      <div className={styles.footer_left_bottom}>
        <div className={styles.footer_info}>{currentYear} </div>
        <div className={styles.footer_info}>© KLOT</div>
        <div className={styles.footer_info}>Все права защищены</div>
        <div className={styles.footer_info}>16+</div>
      </div>
    </div>
  );
}

export default Footerleft;
