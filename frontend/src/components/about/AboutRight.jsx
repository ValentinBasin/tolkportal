import styles from './About.module.css';
import { ABOUT_DATA } from '../../data';
function AboutRight() {
  return (
    <div className={styles.about__right}>
      <div className={styles.about__title}>Толк</div>

      <div className={styles.about__info}>
        {ABOUT_DATA.map((item, index) => {
          return (
            <p key={index} className={styles.about__text}>
              {item.text}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default AboutRight;
