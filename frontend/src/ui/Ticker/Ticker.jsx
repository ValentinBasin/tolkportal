import TickerItem from './TickerItem';
import styles from './Ticker.module.css';

function Ticker() {
  return (
    <div className={styles.ticker}>
      <div className={styles.ticker__wrapper}>
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
        <TickerItem />
      </div>
    </div>
  );
}

export default Ticker;
