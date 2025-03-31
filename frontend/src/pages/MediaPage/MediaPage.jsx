import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import DoubleTitles from "../../ui/DoubleTitles/DoubleTitles";
import PopularItem from "../../components/popular/PopularItem";
import styles from "./Media.module.css";
import { fetchData } from "../../function";
import { useState, useEffect } from "react";
import Rubric from "../../components/Rubric/Rubric";

function MediaPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const backendUrl = import.meta.env.VITE_STRAPI_API_URL;
      const data = await fetchData(`${backendUrl}/api/articles?populate=image`);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />

      <section className={styles.media}>
        <div className="container">
          <DoubleTitles title="Медиа" />

          <div className={styles.media__wrapper}>
            <div className={styles.media__articles}>
              {posts.map((post, index) => (
                <PopularItem key={index} post={post} />
              ))}
            </div>
            <div className={styles.media__rubric}>
              <Rubric />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default MediaPage;
