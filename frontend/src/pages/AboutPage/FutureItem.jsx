import styles from './AboutPage.module.css';
function FutureItem({ ...props }) {
  const text = props.text;
  const classes = props.classes;

  return <div className={classes}>{text}</div>;
}

export default FutureItem;
