import { SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Slider.module.css';
function SliderItem({ post }) {
  const image = post.imageUrl
  // const [image, setImage] = useState();
  // const url = post._links['wp:featuredmedia'][0].href;
  //
  // const fetchImages = async () => {
  //   const response = await axios.get(url);
  //   const data = setImage(response.data.source_url);
  // };

  // useEffect(() => {
  //   fetchImages();
  // }, [post]);
  return (
    <a href={post.link} className={styles.link}>
      <img src={image} alt={post.title} />
    </a>
  );
}

export default SliderItem;
