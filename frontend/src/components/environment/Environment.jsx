import styles from './Environment.module.css';
import Container from '../../ui/Container/Container';
import { Link } from 'react-router-dom';
function Environment() {
  return (
    <Container classes={styles.environment}>
      <div className={styles.environment__container}>
        <h2 className={styles.environment__title}>Среда</h2>
        <p className={styles.environment__text}>
          Раскрываем твой потенциал. Каждый участник формирует данное поле в
          ценностях и принципах «кульутуры созидания».
        </p>
        <Link className={styles.environment__link} to="/about">
          Присоединиться
        </Link>
      </div>
    </Container>
  );
}

export default Environment;
