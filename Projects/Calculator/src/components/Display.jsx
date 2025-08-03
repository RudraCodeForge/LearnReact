import styles from '../styles/Display.module.css';
const Display = (props) => {
  return (
    <div className={`${styles.display} mb-4`}>
      <input
        type="text"
        className={`form-control ${styles.displayInput}`}
        value={props.value}
        readOnly
      />
    </div>
  );
};
export default Display;
