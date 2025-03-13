import './Burger.css';

function Burger({ onClick, isOpen }) {
  const classes = isOpen ? 'burger burger--active' : 'burger';
  return (
    <button onClick={onClick} className={classes} aria-label="Открыть меню">
      <span className="burger__line"></span>
    </button>
  );
}

export default Burger;
