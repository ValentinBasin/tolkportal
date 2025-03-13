import Form from '../../components/form/Form';
import styles from './Modal.module.css';

function Modal({ ...props }) {
  const active = props.state;
  const setActive = props.setState;

  return (
    <div className={styles.modal} onClick={(e) => setActive(!active)}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <div className={styles.title}>Оставить заявку</div>
          <div className={styles.desc}>
            мы свяжемся с вами в течение 5 минут
          </div>

          <Form />
        </div>
      </div>
    </div>
  );
}

export default Modal;
