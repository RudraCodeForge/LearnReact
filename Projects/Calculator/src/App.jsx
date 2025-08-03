import styles from './Calculator.module.css';

function App() {
  const buttons = [
    'C', '/', '*', '7',
    '8', '9', '-', '4',
    '5', '6', '+', '1',
    '2', '3', '=', '0', '00'
  ];

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" 
         style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <div className={styles.calculatorContainer}>
        <h2 className={styles.calculatorTitle}>Calculator</h2>
        
        <input 
          type="text" 
          value={display}
          readOnly
          className={styles.display}
        />
        
        <div className={styles.buttonsGrid}>
          {buttons.map((button, index) => (
            <button
              key={index}
              className={getButtonClass(button)}
            >
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
