import styles from '../styles/Buttons.module.css';
const Buttons = (props) => {
  const GETBUTTON = (e,button) =>{
    props.handleButtonClick(button);
  }
  return (
    <div className={styles.buttonGrid}>
      {props.buttons.map((button, index) => (
        <button
          key={index}
          className={`btn ${styles.calcButton} 
          ${styles[button.type]} 
          ${button.span ? styles[`span${button.span}`] : ""}`}
          onClick={(e)=>{
            GETBUTTON(e,button)
          }}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
