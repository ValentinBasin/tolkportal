import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import Ticker from '../../ui/Ticker/Ticker';
import styles from './Studio.module.css';
import cirlce from '../../assets/images/circle-some.png';
import StudioServices from '../../components/StudioServices/StudioServices';
import Helper from '../../components/Helper/Helper';
function StudioPage() {
  return (
    <>
      <Header />

      <section className={styles.studio}>
        <div className={styles.row}>
          <div className={styles.studio__abstract}>
            <img src={cirlce} aria-hidden="true" />
            <div className={styles.studio__abstract_blur}></div>
            <div className={styles.ticker}>
              <div className={styles.ticker__wrapper}>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
                <div className={styles.ticker__item}>ТОЛК</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className="container">
            <p className={styles.studio__text}>
              Мы — объединенная команда профессиональных единомышленников,
              готовых вдохнуть жизнь в ваше личное развитие и процветание вашего
              дела
            </p>
          </div>
        </div>
      </section>
      <StudioServices />
      <Helper />
      <Footer />
    </>
  );
}

export default StudioPage;
