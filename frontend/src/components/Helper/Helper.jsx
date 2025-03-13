import imagesHelper from '../../assets/images/smile.png';
import styles from './Helper.module.css';
function Helper() {
  return (
    <section className={styles.helper}>
      <div className="container">
        <h2 className={styles.helper__title}>
          Мы готовы помогать друг другу и решать проблемы совместно
        </h2>

        <div className={styles.helper__images}>
          <img
            src={imagesHelper}
            alt="Мы готовы помогать друг другу и решать проблемы совместно"
          />
        </div>
      </div>
    </section>
  );
}

export default Helper;
