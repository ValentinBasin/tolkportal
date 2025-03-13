import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import Container from '../../ui/Container/Container';
import styles from './Article.module.css';
import { useState, useEffect } from 'react';
import { formatDate } from '../../function';
import { getImageAcf } from '../../function';
import asideNewsImg from '../../assets/images/aside-img.jpg'
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

function Article() {
  const [post, setPosts] = useState(null);
  const [images, setImages] = useState(null);
  const [acfImages, setAcfImages] = useState('');
  const [acfGalleryImages, setAcfGalleryImages] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      const currentUrl = window.location.href;
      const id = currentUrl.split('/').pop();

      const data = await fetchData(
        `https://tolkadminka.ru/wp-json/wp/v2/posts/${id}`,
      );
      setPosts(data);
    };

    getPost();
  }, []);

  useEffect(() => {
    if (post && post._links && post._links['wp:featuredmedia']) {
      const getImages = async () => {
        const data = await fetchData(post._links['wp:featuredmedia'][0].href);
        setImages(data.source_url);
      };

      getImages();
    }
  }, [post]);

  useEffect(() => {
    async function fetchImages() {
      try{
        const url = await getImageAcf(post.acf.author_img);
        setAcfImages(url);
      } catch (err) {
      }
    }
    fetchImages()
  }, [post])


  useEffect(() => {
    async function fetchGallery() {
      if (post && post.acf && post.acf.images_gallery_post && Array.isArray(post.acf.images_gallery_post)) {
        try {
          const imageUrls = await Promise.all(
            post.acf.images_gallery_post.map(async (imageId) => {
              const url = await getImageAcf(imageId);
              return url;
            })
          );
          setAcfGalleryImages(imageUrls);
        } catch (err) {
          console.error('Error fetching gallery images:', err);
        }
      }
    }
    fetchGallery();
  }, [post]);

  if (!post) {
    return <div className={styles.loading}></div>;
  }

  return (
    <>
      <Header />

     

      <section className={styles.article}>
          <Container>
          <div className={styles.head}>{post.title.rendered}</div>
          <div className={styles.date}>{formatDate(post.date)}</div>

            <div className={styles.wrapper}>
              <div className={styles.content}>

                <div className={styles.post}>
                  <div className={styles.post_image}>
                      {images && <img src={images} alt={post.title.rendered} />}
                  </div>
                  {/* <div className={styles.post_title}>
                    {post.title.rendered}
                  </div> */}

                  {post.content.rendered && 
                    <div className={styles.post_description}  dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                  }
                 
                </div>

                {post.acf.author_name &&
                <div className={styles.post_author}>
                  <div className={styles.post_author_img}>
                    <img src={acfImages} alt="" />
                  </div>
                  <div className={styles.post_author_info}>
                  <div className={styles.post_author_name}>{post.acf.author_name}</div>
                  <div className={styles.post_author_status}>{post.acf.author_status}</div>
                  </div>
                </div>
                }
                {acfGalleryImages && 
                <div className={styles.gallery}>
                  
                  {acfGalleryImages.map((item) => (
                    <div className={styles.gallery_item}>
                        <img src={item} />
                    </div>
                  ))}
                </div>
                }
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
