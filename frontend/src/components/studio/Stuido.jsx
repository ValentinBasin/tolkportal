import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Studio.module.css";
import { fetchData } from "../../function.js";
import { useState, useEffect } from "react";
import Item from "./StudioItem.jsx";

const sliderSettings = {
  spaceBetween: 100,

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3.5,
    },
  },
};

function Studio() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const backendUrl = import.meta.env.VITE_STRAPI_API_URL;
      const data = await fetchData(`${backendUrl}/api/teams?populate=image`);
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <Container classes={styles.studio}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.navigation}>
            <button type="btn" className={styles.prev}>
              <svg
                width="73"
                height="41"
                viewBox="0 0 73 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73 20.5L2 20.5M2 20.5L21.5 40M2 20.5L21.5 1"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button type="btn" className={styles.next}>
              <svg
                width="73"
                height="41"
                viewBox="0 0 73 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20.5L71 20.5M71 20.5L51.5 40M71 20.5L51.5 1"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.studio__slider}>
          <Swiper {...sliderSettings} className="swiper-studio">
            {posts.map((post, index) => (
              <SwiperSlide key={index}>
                <Item post={post} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.bottom}>
          <div className={styles.studio__support}>
            <Button text="Поддержать проект" link="/" />
          </div>

          <div className={styles.studio__support_info}>
            <div className={styles.studio__support_text}>
              Если вы разделяете наше мировоззрение и хотите поддержать идею
              развития культуры созидания, мы будем благодарны получить от вас
              поддержку.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Studio;
