import styles from "./Studio.module.css";

function Item({ post }) {
  const title = post.title;
  const desc = post.desc;
  const img = post.imageUrl;

  return (
    <div className={styles.block}>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>

      <div className={styles.content}>
        <div className={styles.name}>{title}</div>
        <div
          className={styles.info}
          dangerouslySetInnerHTML={{ __html: desc }}
        ></div>
      </div>
    </div>
  );
}

export default Item;
