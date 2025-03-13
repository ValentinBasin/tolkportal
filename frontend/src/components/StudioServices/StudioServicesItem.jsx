/* eslint-disable react/prop-types */
import styles from './StudioServices.module.css';
function StudioServicesItem({ ...props }) {
  const title = props.title;
  const future = props.future;
  const images = props.images;
  const state = props.state;
  const setState = props.setState;

  return (
    <article className={styles.services__item}>
      <div className={styles.services__item_icon}>
        <img src={images} alt={title} />
      </div>
      <h3 className={styles.services__item_title}>{title}</h3>
      <ul className={styles.services_item_list}>
        {future.map((item, index) => {
          return (
            <li key={index} className={styles.services__item_text}>
              {item.text}
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => setState(!state)}
        type="button"
        className={styles.services__btn}
      >
        Заказать услугу
      </button>
    </article>
  );
}

export default StudioServicesItem;
