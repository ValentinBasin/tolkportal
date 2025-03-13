import styles from './Rubric.module.css';

function RubricItem({ text, active }) {
  const activeClass = active
    ? `${styles.rubric__btn} ${styles.rubric__btn_active}`
    : `${styles.rubric__btn}`;

  return (
    <button type="button" className={activeClass}>
      {text}
    </button>
  );
}

export default RubricItem;
