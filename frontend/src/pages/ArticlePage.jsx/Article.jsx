import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Container from "../../ui/Container/Container";
import styles from "./Article.module.css";
import { useState, useEffect } from "react";
import { formatDate, fetchData } from "../../function";
import ReactMarkdown from "react-markdown";
// import asideNewsImg from "../../assets/images/aside-img.jpg";

function Article() {
  const [post, setPosts] = useState(null);
  useEffect(() => {
    const getPost = async () => {
      const currentUrl = window.location.href;
      const id = currentUrl.replace(/\/$/, "").split("/").pop();
      const backendUrl = import.meta.env.VITE_STRAPI_API_URL;
      const data = await fetchData(
        `${backendUrl}/api/articles/${id}?populate=*`,
      );
      setPosts(data);
    };

    getPost();
  }, []);

  if (!post) {
    return <div className={styles.loading}></div>;
  }

  return (
    <>
      <Header />
      <section className={styles.article}>
        <Container>
          <div className={styles.head}>{post.title}</div>
          {<div className={styles.date}>{formatDate(post.date)}</div>}

          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.post}>
                <div className={styles.post_image}>
                  {post.imageUrl && (
                    <img src={post.imageUrl} alt={post.title} />
                  )}
                </div>
                <div className={styles.post_description}>
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>

              {/*post.acf.author_name &&
                <div className={styles.post_author}>
                  <div className={styles.post_author_img}>
                    <img src={acfImages} alt="" />
                  </div>
                  <div className={styles.post_author_info}>
                  <div className={styles.post_author_name}>{post.acf.author_name}</div>
                  <div className={styles.post_author_status}>{post.acf.author_status}</div>
                  </div>
                </div>
                */}
              {/*acfGalleryImages && 
                <div className={styles.gallery}>
                  
                  {acfGalleryImages.map((item) => (
                    <div className={styles.gallery_item}>
                        <img src={item} />
                    </div>
                  ))}
                </div>
                */}
            </div>

            {/* <div className={styles.aside}>
                <div className={styles.aside_news}>
                  <article className={styles.aside_news_item}>
                      <div className={styles.aside_news_item_img}>
                          <img src={asideNewsImg} alt="" />
                      </div>
                      <div className={styles.news_date}>04.08.2024 / Онлайн</div>
                      <div className={styles.news_title}>​​Сыграем?🧩</div>
                      <div className={styles.news_desc}>Это не просто игра, а погружение в эволюционное мышление, которое берет свое начало у истоков человечества...</div>
                      <a href="#" className={styles.news_link}>Читать...</a>
                  </article>
                  <article className={styles.aside_news_item}>
                      <div className={styles.aside_news_item_img}>
                          <img src={asideNewsImg} alt="" />
                      </div>
                      <div className={styles.news_date}>04.08.2024 / Онлайн</div>
                      <div className={styles.news_title}>​​Сыграем?🧩</div>
                      <div className={styles.news_desc}>Это не просто игра, а погружение в эволюционное мышление, которое берет свое начало у истоков человечества...</div>
                      <a href="#" className={styles.news_link}>Читать...</a>
                  </article>
                </div>
             
              </div> */}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Article;
