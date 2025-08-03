import display from '../styles/Display.module.css';
const Display = () => {
  return (
    <div className={`${display.display} mb-4`}>
      <input
        type="text"
        className={`form-control ${display.displayInput}`}
        value={display}
        readOnly
      />
    </div>
  );
};
export default Display;
