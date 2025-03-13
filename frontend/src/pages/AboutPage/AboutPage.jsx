import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import Ticker from '../../ui/Ticker/Ticker';
import DoubleTitles from '../../ui/DoubleTitles/DoubleTitles';
import HeroContent from '../../components/Hero/HeroContent';
import styles from './AboutPage.module.css';
import teamImg from '../../assets/images/team.png';
import FutureItem from './FutureItem';
import { WHYWE_DATA, WHYWE_BENIFFITS_DATA } from '../../data';
import images from '../../assets/images/key.jpg';
import images2 from '../../assets/images/beniffits-img.jpg';
import { scrollTop } from '../../function';
function AboutPage() {
  scrollTop();
  return (
    <>
      <Header />
      <section className={styles.about}>
        <div className="container container__about">
          <div className={styles.wrapper}>
            <HeroContent
              title="Культура созидания*"
              desc="*Культура созидания — это способность видеть проблемы как вызовы, а не препятствия."
            />
          </div>
        </div>
      </section>
      <section className={styles.slider}>
        <div className={styles.slider__wrapper}>
          <Ticker />
          <div className={styles.slider__text}>
            Добро пожаловать в мир Культуры Созидания – где идеи объединяют нас,
            а разнообразие становится нашей силой.
          </div>
        </div>
      </section>
      <section className={styles.team}>
        <div className="container">
          <div className={styles.team__wrapper}>
            <div className={styles.team__info}>
              <h2 className={styles.team__title}>Наша команда</h2>
              <p className={styles.team__desc}>
                Мы – международная команда энтузиастов из разных уголков мира,
                вдохновленная одной общей целью: развивать и внедрять Культуру
                Созидания. Наши участники привносят различные опыты, перспективы
                и креативные подходы, создавая уникальное сообщество, сплоченное
                общим стремлением к позитивным переменам.
              </p>
            </div>

            <div className={styles.team__img}>
              <img src={teamImg} alt="Наша команда" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.culture}>
        <div className="container">
          <div className={styles.culture__wrapper}>
            <h2 className={styles.culture__title}>
              Что такое культура созидания?
            </h2>

            <div className={styles.culture__block}>
              <div className={styles.culture__desc}>
                Для нас Культура Созидания – это философия жизни, основанная на
                взаимном уважении, творчестве и ответственности.
              </div>
              <div className={styles.culture__desc}>
                Это образ жизни, где каждый может раскрыть свой потенциал, а
                общество растет как единое целое.
              </div>
            </div>

            <div className={styles.culture__futures}>
              <div className={styles.culture__futures_row}>
                <FutureItem text="Уважение" classes={styles.futures_item} />
              </div>
              <div className={styles.culture__futures_row}>
                <FutureItem text="Уважение" classes={styles.futures_item} />
                <FutureItem text="Творчество" classes={styles.futures_item} />
                <FutureItem
                  text="Ответственность"
                  classes={styles.futures_item}
                />
              </div>
              <div className={styles.culture__futures_row}>
                <FutureItem text="Уважение" classes={styles.futures_item} />
                <FutureItem text="Творчество" classes={styles.futures_item} />
                <FutureItem
                  text="Ответственность"
                  classes={styles.futures_item}
                />
                <FutureItem text="Уважение" classes={styles.futures_item} />
                <FutureItem text="Творчество" classes={styles.futures_item} />
                <FutureItem
                  text="Ответственность"
                  classes={styles.futures_item}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.whywe}>
        <div className="container">
          <div className={styles.whywe__wrapper}>
            <div className={styles.whywe__info}>
              <DoubleTitles title="Почему мы?" />

              {WHYWE_DATA.map((item, index) => {
                return (
                  <p key={index} className={styles.whywe__desc}>
                    {item.text}
                  </p>
                );
              })}

              <div className={styles.whywe__info_bottom}>
                <div className={styles.whywe__problem}>
                  Мы готовы помогать друг другу и решать проблемы совместно.
                </div>
                <a
                  href="https://forms.gle/ZixBAjPxm6RrmBKg6"
                  className={styles.whywe__link}
                >
                  Присоединиться
                </a>
              </div>
            </div>
            <div className={styles.whywe__images}>
              <img src={images} aria-hidden="true" />
            </div>
          </div>

          <div className={styles.whywe__beniffits}>
            <div className={styles.whywe__beniffits_img}>
              <img src={images2} aria-hidden="true" />
            </div>

            <div className={styles.whywe__beniffits_block}>
              {WHYWE_BENIFFITS_DATA.map((item, index) => {
                return (
                  <div key={index} className={styles.whywe__beniffits_item}>
                    <div className={styles.whywe__beniffits_title}>
                      {item.title}
                    </div>
                    <div className={styles.whywe__beniffits_desc}>
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;
