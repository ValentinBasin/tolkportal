import Button from '../../ui/Button/Button';
import styles from './Footer.module.css';

function FooterRight() {
  return (
    <div className={styles.footer_right}>
      <div className={styles.footer_right_block}>
        {/* <Button text="Рекламодателям" link="/" modify={true} /> */}
        <a href="mailto:tolkportal@gmail.com" className={styles.footer_mail}>
          tolkportal@gmail.com
        </a>
        <div className={styles.footer_social}></div>
      </div>
    </div>
  );
}

export default FooterRight;
