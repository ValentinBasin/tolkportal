import styles from './Ticker.module.css';
import tickerImg from '../../assets/images/about-us.svg';
function TickerItem() {
  return (
    <div className={styles.ticker__item}>
      <img src={tickerImg} aria-hidden="true" />
    </div>
  );
}

export default TickerItem;
