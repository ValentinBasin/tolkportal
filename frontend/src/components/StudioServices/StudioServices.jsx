import { SERVICES_ITEM_DATA } from '../../data';
import StudioServicesItem from './StudioServicesItem';
import styles from './StudioServices.module.css';
import Modal from '../../ui/Modal/Modal';
import { useState } from 'react';
function StudioServices() {
  const [active, setActive] = useState(false);

  return (
    <>
      <section className={styles.services}>
        <div className="container">
          <div className={styles.services__title}>Услуги студии Толк:</div>

          <div className={styles.services__grid}>
            {SERVICES_ITEM_DATA.map((item) => (
              <StudioServicesItem
                key={item.id}
                title={item.title}
                future={item.futures}
                images={item.images}
                state={active}
                setState={setActive}
              />
            ))}
          </div>

          <div className={styles.services__description}>
            Выберите наши консультационные услуги, чтобы оптимизировать ваш
            бизнес и достичь новых высот в развитии!
          </div>
        </div>
      </section>

      {active && <Modal state={active} setState={setActive} />}
    </>
  );
}

export default StudioServices;
