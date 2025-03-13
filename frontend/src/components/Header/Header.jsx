import Container from '../../ui/Container/Container';
import Menu from '../../ui/Menu/Menu';
import logo from '../../assets/images/logo.svg';
import styles from './Header.module.css';
import { useState } from 'react';
import Burger from '../../ui/Burger/Burger';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('sd');
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="ТОЛК" />
          </a>

          <Menu isOpen={isOpen} />
          <Burger onClick={toggleMenu} isOpen={isOpen} />
        </div>
      </Container>
    </header>
  );
}

export default Header;
