import styles from './About.module.css';
import aboutImage from '../../assets/images/about-img.png';
import Button from '../../ui/Button/Button';
import { Link } from 'react-router-dom';
function AboutLeft() {
  return (
    <div className={styles.about__left}>
      <div className={styles.about__img}>
        <img src={aboutImage} alt="Погружайся" />
      </div>
      <Link className={styles.about_link} text="Погружайся" to={'/about'}>Погружайся</Link>
    </div>
  );
}

export default AboutLeft;
