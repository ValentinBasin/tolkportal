import Container from "../../ui/Container/Container";
import DoubleTitles from "../../ui/DoubleTitles/DoubleTitles";
import Slider from "../../ui/Slider/Slider";
import styles from "./Popular.module.css";
import PopularItem from "./PopularItem";
import { fetchData } from "../../function";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Popular() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const backendUrl = import.meta.env.VITE_STRAPI_API_URL;
      const data = await fetchData(`${backendUrl}/api/articles?populate=image`);
      setPosts(data.slice(0, 4));
    };
    fetchPosts();
  }, []);

  return (
    <Container classes={styles.popular}>
      <DoubleTitles
        title="Популярное"
        text="Популярные статьи из нашего новостного портала"
      />
      {/* <Slider /> */}
      <div className={styles.popular__items}>
        {posts.map((post, index) => (
          <PopularItem key={index} post={post} />
        ))}
      </div>
      <Link to={"/media"} className={styles.popular__more}>
        Показать еще
      </Link>
    </Container>
  );
}

export default Popular;
