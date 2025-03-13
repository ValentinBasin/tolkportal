import styles from './Menu.module.css';
import { Link } from 'react-router-dom';
function MenuLink({ ...props }) {
  const text = props.text;
  const href = props.href;

  return (
    <li className={styles.menu_item}>
      <Link to={href} className={styles.menu_link}>
        {text}
      </Link>
    </li>
  );
}

export default MenuLink;
