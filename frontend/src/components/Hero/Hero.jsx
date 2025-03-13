import Container from '../../ui/Container/Container';
import HeroContent from './HeroContent';
import styles from './Hero.module.css';

function Hero() {
  return (
    <Container classes={styles.hero}>
      <HeroContent
        title="Культура созидания*"
        desc="*Культура созидания — это способность видеть проблемы как вызовы, а не препятствия."
      />
    </Container>
  );
}

export default Hero;
