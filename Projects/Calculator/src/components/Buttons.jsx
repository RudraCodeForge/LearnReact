import styles from '../styles/Buttons.module.css';
const Buttons = (props) => {
  return (
    <div className={styles.buttonGrid}>
      {props.buttons.map((button, index) => (
        <button
          key={index}
          className={`btn ${styles.calcButton} ${styles[button.type]} ${button.span ? styles[`span${button.span}`] : ""}`}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
