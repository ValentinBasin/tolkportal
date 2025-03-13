/* eslint-disable react/prop-types */
import styles from './Popular.module.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../../function';
import { Link } from 'react-router-dom';
function PopularItem({ post }) {
  const [img, setImg] = useState();

  const title = post.title.rendered;
  const desc = post.excerpt.rendered;
  const url = post._links['wp:featuredmedia'][0].href;

  useEffect(() => {
    const fetchImg = async () => {
      const data = await fetchData(url);
      setImg(data.source_url);
    };

    fetchImg();
  }, [post]);

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
