
import { useState } from 'react';
import styles from './Calculator.module.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const handleButtonClick = (value) => {
    if (value === 'C') {
      clear();
    } else if (value === '=') {
      performCalculation();
    } else if (['+', '-', '*', '/'].includes(value)) {
      inputOperation(value);
    } else if (value === '00') {
      inputNumber('00');
    } else {
      inputNumber(value);
    }
  };

  const getButtonClass = (button) => {
    let classes = [styles.button];
    
    if (button === 'C') {
      classes.push(styles.functionButton);
    } else if (['+', '-', '*', '/'].includes(button)) {
      classes.push(styles.operatorButton);
    } else if (button === '=') {
      classes.push(styles.equalsButton);
    } else if (button === '0') {
      classes.push(styles.numberButton, styles.zeroButton);
    } else {
      classes.push(styles.numberButton);
    }
    
    return classes.join(' ');
  };

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
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
