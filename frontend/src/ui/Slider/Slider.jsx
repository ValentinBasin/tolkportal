import { fetchData } from '../../function';
import 'swiper/css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SliderItem from './SliderItem';
import axios from 'axios';
import styles from './Slider.module.css';

const swiperSettings = {
  pagination: true,
  modules: [Pagination],
  className: 'popular__swiper',
};

function Slider() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchData(
        'https://tolkadminka.ru/wp-json/wp/v2/posts?categories=2',
      );
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Swiper {...swiperSettings} pagination={{ clickable: true }}>
        {posts.map((post, index) => (
          <SwiperSlide className={styles.popular_slide} key={index}>
            <SliderItem post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
