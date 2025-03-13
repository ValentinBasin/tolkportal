import MenuLink from './MenuLink.jsx';
import styles from './Menu.module.css';
// eslint-disable-next-line react/prop-types
function Menu({ direction, isOpen }) {
  const classes = direction ? `${styles.menu_col}` : `${styles.menu_list}`;
  const open = isOpen
    ? `${styles.menu_active} ${styles.menu}`
    : `${styles.menu}`;
  return (
    <nav className={open}>
      <ul className={classes}>
        <MenuLink text="Главная" href="/" />
        <MenuLink text="О нас" href="/about" />
        <MenuLink text="Медиа" href="/media" />
        <MenuLink text="Среда" href="https://t.me/+0VbjiJq5IbhiODEy" />
        <MenuLink text="Студия" href="/studio" />
        <MenuLink text="Контакты" href="/contacts" />
      </ul>
    </nav>
  );
}

export default Menu;
