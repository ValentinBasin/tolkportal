import styles from './Rubric.module.css';
import RubricItem from './RubricItem';
function Rubric() {
  return (
    <div className={styles.rubric}>
      <div className={styles.rubric__text}>Рубрики</div>
      <div className={styles.rubric__items}>
        <RubricItem text="Все" active={true} />
        <RubricItem text="Создавай" />
        <RubricItem text="Твори" />
        <RubricItem text="Вдохновляй" />
        <RubricItem text="Познавай" />
      </div>
    </div>
  );
}

export default Rubric;
