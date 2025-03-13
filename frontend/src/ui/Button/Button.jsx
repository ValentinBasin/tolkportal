import styles from './Button.module.css';
// eslint-disable-next-line react/prop-types
function Button({ text, link, modify }) {
  const classes = modify
    ? `${styles.link} ${styles.link_modify}`
    : `${styles.link}`;

  return (
    <a className={classes} href={link}>
      {text}
    </a>
  );
}

export default Button;
