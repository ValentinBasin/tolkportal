import styles from './DoubleTitles.module.css';

// eslint-disable-next-line react/prop-types
function DoubleTitles({ title, text, modify }) {
  const classes = modify
    ? `${styles.title} ${styles.title_modify}`
    : `${styles.title}`;
  return (
    <div className={styles.wrapper}>
      <h2 className={classes}>{title}</h2>
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
}

export default DoubleTitles;
