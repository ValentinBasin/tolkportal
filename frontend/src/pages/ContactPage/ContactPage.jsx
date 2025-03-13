import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import DoubleTitles from '../../ui/DoubleTitles/DoubleTitles';
import styles from './Contact.module.css';
import phone from '../../assets/images/icons/phone.svg';
import mail from '../../assets/images/icons/email.svg';
import energy from '../../assets/images/icons/energy.svg';
function ContactPage() {
  return (
    <>
      <Header />
      <section className={styles.contacts}>
        <div className="container">
          <DoubleTitles title="Контакты" modify={true} />

          <div className={styles.contacts__items}>
            <div className={styles.contacts__item}>
              <div className={styles.contacts__icon}>
                <img src={phone} aria-hidden="true" />
              </div>

              <div className={styles.contacts__links}>
                <a
                  className={styles.contacts__link}
                  href="tel:+972 53 371 1414"
                >
                  972 53 371 1414
                </a>
              </div>
            </div>
            <div className={styles.contacts__item}>
              <div className={styles.contacts__icon}>
                <img src={mail} aria-hidden="true" />
              </div>

              <div className={styles.contacts__links}>
                <a className={styles.contacts__link} href="">
                  tolkportal@gmail.com
                </a>
                <a className={styles.contacts__link} href=""></a>
              </div>
            </div>
            <div className={styles.contacts__item}>
              <div className={styles.contacts__icon}>
                <img src={energy} aria-hidden="true" />
              </div>

              <div className={styles.contacts__links}>
                <a
                  className={styles.contacts__link}
                  href="https://t.me/+0VbjiJq5IbhiODEy"
                >
                  <svg
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.2035 56.4217C43.7799 56.4217 56.407 43.7946 56.407 28.2182C56.407 12.6418 43.7799 0.0146484 28.2035 0.0146484C12.6271 0.0146484 0 12.6418 0 28.2182C0 43.7946 12.6271 56.4217 28.2035 56.4217ZM32.2591 41.6764L38.5868 17.0096C38.7213 16.4853 38.2378 16.012 37.7165 16.1577L13.2729 22.9881C12.6864 23.1519 12.5713 23.9331 13.0856 24.2591L21.0217 29.2906C21.2611 29.4424 21.5683 29.4356 21.8007 29.2733L31.3056 22.6391L23.86 31.1483C23.6438 31.3954 23.6274 31.7592 23.8204 32.0248L31.0092 41.9151C31.359 42.3964 32.1112 42.2527 32.2591 41.6764Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a
                  className={styles.contacts__link}
                  href="https://vk.com/tolkportal"
                >
                  <svg
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.6108 0C13.0354 0 0.407227 12.6281 0.407227 28.2035C0.407227 43.7789 13.0354 56.4071 28.6108 56.4071C44.1862 56.4071 56.8143 43.7789 56.8143 28.2035C56.8143 12.6281 44.1862 0 28.6108 0ZM43.561 37.5271L39.1706 37.5883C39.1706 37.5883 38.2235 37.7739 36.9848 36.9184C35.342 35.7903 33.7931 32.8548 32.5851 33.2355C31.3606 33.6257 31.3982 36.2674 31.3982 36.2674C31.3982 36.2674 31.4076 36.7327 31.1279 37.0359C30.8247 37.3626 30.2301 37.3297 30.2301 37.3297H28.2629C28.2629 37.3297 23.9243 37.6893 20.1003 33.7032C15.9356 29.3575 12.2551 20.7813 12.2551 20.7813C12.2551 20.7813 12.0388 20.2407 12.2692 19.9634C12.53 19.6579 13.2328 19.6485 13.2328 19.6485L17.9334 19.625C17.9334 19.625 18.3752 19.7025 18.6949 19.9375C18.9557 20.1303 19.1038 20.4922 19.1038 20.4922C19.1038 20.4922 19.863 22.4171 20.8712 24.161C22.8361 27.5595 23.748 28.3046 24.4155 27.9403C25.3885 27.4091 25.0971 23.1363 25.0971 23.1363C25.0971 23.1363 25.1159 21.5851 24.6082 20.8941C24.2134 20.3559 23.4707 20.1961 23.1463 20.1561C22.8807 20.1209 23.3132 19.5051 23.8773 19.2278C24.7234 18.8141 26.2182 18.7906 27.9832 18.8071C29.3581 18.8212 29.7553 18.9058 30.2912 19.0374C31.9129 19.4299 31.3629 20.9435 31.3629 24.5747C31.3629 25.7381 31.1538 27.3739 31.9905 27.9121C32.3524 28.1448 33.2338 27.9473 35.4313 24.201C36.4772 22.4242 37.2598 20.3371 37.2598 20.3371C37.2598 20.3371 37.4314 19.9657 37.697 19.8059C37.9696 19.6414 38.3363 19.6931 38.3363 19.6931L43.2836 19.6626C43.2836 19.6626 44.769 19.4839 45.0111 20.1585C45.2649 20.8636 44.4564 22.5111 42.4352 25.2069C39.1166 29.6349 38.7476 29.2236 41.5045 31.7854C44.1368 34.232 44.6797 35.4213 44.7714 35.5717C45.8596 37.3838 43.561 37.5271 43.561 37.5271Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a
                  className={styles.contacts__link}
                  href="https://dzen.ru/tolkportal"
                >
                  <svg
                    width="58"
                    height="57"
                    viewBox="0 0 58 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.814453 28.2077C0.816707 43.7808 13.4407 56.4048 29.0138 56.407C28.6654 56.4053 28.318 56.1824 28.2653 55.7384L27.378 48.2598C26.2321 38.6031 18.6185 30.9894 8.96162 29.8436L1.48306 28.9562C1.0391 28.9035 0.816216 28.5561 0.814453 28.2077Z"
                      fill="black"
                    />
                    <path
                      d="M29.0221 56.407C44.5966 56.4048 57.2215 43.7785 57.2215 28.2035C57.2215 12.6272 44.5944 0 29.018 0C13.443 0 0.816707 12.6249 0.814453 28.1994C0.816216 27.8509 1.0391 27.5036 1.48306 27.4509L8.96162 26.5635C18.6185 25.4177 26.2321 17.804 27.378 8.14716L28.2653 0.668592C28.3712 -0.222861 29.6648 -0.222861 29.7706 0.668592L30.658 8.14716C31.8038 17.804 39.4175 25.4177 49.0742 26.5635L56.5528 27.4509C57.4444 27.5567 57.4444 28.8503 56.5528 28.9562L49.0742 29.8436C39.4175 30.9894 31.8038 38.6031 30.658 48.2598L29.7706 55.7384C29.7179 56.1824 29.3706 56.4053 29.0221 56.407Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactPage;
