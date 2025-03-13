import styles from './Form.module.css';
function Form() {
  return (
    <form action="" className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <label htmlFor="name-input">Ваше имя*</label>
          <input type="text" id="name-input" name="name" />
        </div>
        <div className={styles.block}>
          <label htmlFor="phone-input">Ваше телефон*</label>
          <input type="text" id="phone-input" name="phone" />
        </div>
        <div className={styles.block}>
          <span className={styles.police}>
            Оставляя заявку Вы даете согласие на{' '}
            <a href="">обработку персональных данных</a>
          </span>
        </div>
        <button type="submit" className={styles.btn}>
          Отправить
        </button>
      </div>
    </form>
  );
}

export default Form;
