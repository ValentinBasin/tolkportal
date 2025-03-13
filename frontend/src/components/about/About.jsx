import Container from '../../ui/Container/Container';
import styles from './About.module.css';
import AboutLeft from './AboutLeft';
import AboutRight from './AboutRight';

function About() {
  return (
    <Container classes={styles.about}>
      <div className={styles.about__container}>
        <AboutLeft />
        <AboutRight />
      </div>
    </Container>
  );
}

export default About;
