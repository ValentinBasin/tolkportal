import styles from "./Popular.module.css";
import { Link } from "react-router-dom";
function PopularItem({ post }) {
  const title = post.title;
  const desc = post.excerpt;
  const img = post.smallImageUrl;

  return (
    <div className={styles.item}>
      <Link to={`article/${post.id}`} className={styles.item__img}>
        <img src={img} alt={title} />
      </Link>

      <div className={styles.content}>
        <h2 className={styles.title}>
          <Link to={`article/${post.id}`}>{title}</Link>
        </h2>

        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
      </div>

      <Link className={styles.link} to={`article/${post.id}`}>
        Читать
      </Link>
    </div>
  );
}

export default PopularItem;
