import Footerleft from './footer-left.jsx';
import footerImg from '../../assets/images/footer-abstraction.png';
import styles from './Footer.module.css';
import FooterRight from './footer-right.jsx';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_container} container`}>
        <Footerleft />
        <div className={styles.footer_img}>
          <img src={footerImg} aria-hidden="true" />
        </div>
        <FooterRight />
      </div>
    </footer>
  );
}

export default Footer;
