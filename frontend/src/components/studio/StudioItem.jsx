/* eslint-disable react/prop-types */
import styles from './Studio.module.css';
import { useState, useEffect } from 'react';
import { fetchData } from '../../function';

function Item({ ...props }) {
  const [img, setImg] = useState();

  const title = props.title;
  const desc = props.desc;
  const link = props.link;

  const url = link._links['wp:featuredmedia'][0].href;

  useEffect(() => {
    const fetchImage = async () => {
      const data = await fetchData(url);

      setImg(data.source_url);
    };

    fetchImage();
  }, [link]);

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
