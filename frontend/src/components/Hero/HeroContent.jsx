import styles from './Hero.module.css';
function HeroContent({ ...props }) {
 return (
  <div className={styles.content}>
   <div className={styles.title}>{props.title}</div>
   <p className={styles.desc}>{props.desc}</p>
  </div>
 );
}

export default HeroContent;
