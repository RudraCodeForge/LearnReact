import display from '../styles/Display.module.css';
const Display = ({ value = '0' }) => {
  return (
    <div className={`${display.display} mb-4`}>
      <input
        type="text"
        className={`form-control ${display.displayInput}`}
        value={value}
        readOnly
      />
    </div>
  );
};
export default Display;
