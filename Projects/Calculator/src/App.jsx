import Heading from './components/Heading';
import Display from './components/Display';
import Buttons from './components/Buttons';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

function App() {
  const [display, setDisplay] = useState('0');

  const buttons = [
    { text: 'C', type: 'clear', span: 2 },
    { text: '⌫', type: 'backspace' },
    { text: '÷', type: 'operator' },
    { text: '1', type: 'number' },
    { text: '2', type: 'number' },
    { text: '3', type: 'number' },
    { text: '×', type: 'operator' },
    { text: '4', type: 'number' },
    { text: '5', type: 'number' },
    { text: '6', type: 'number' },
    { text: '-', type: 'operator' },
    { text: '7', type: 'number' },
    { text: '8', type: 'number' },
    { text: '9', type: 'number' },
    { text: '+', type: 'operator' },
    { text: '0', type: 'number', span: 2 },
    { text: '.', type: 'decimal' },
    { text: '=', type: 'equals' }
  ];
  const handleButtonClick = (button) => {
    if (button.type === 'number') {
      setDisplay(display === '0' ? button.text : display + button.text);
    } 
    else if (button.type === 'operator') {
      // Prevent multiple operators in a row
      if (!/[+\-×÷]$/.test(display)) {
        setDisplay(display + button.text);
      }
    } 
    else if (button.type === 'decimal') {
      // Prevent multiple decimals in same number
      const parts = display.split(/[\+\-×÷]/);
      const lastPart = parts[parts.length - 1];
      if (!lastPart.includes('.')) {
        setDisplay(display + button.text);
      }
    } 
    else if (button.type === 'clear') {
      setDisplay('0');
    } 
    else if (button.type === 'backspace') {
      setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
    } 
    else if (button.type === 'equals') {
      try {
        let expression = display.replace(/×/g, '*').replace(/÷/g, '/');
        const result = eval(expression); // Simple eval (for learning only)
        setDisplay(String(result));
      } catch {
        setDisplay('Error');
      }
    }
  };
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-gradient">
      <div className={`${styles.calculator} card shadow-lg`}>
        <div className="card-body p-4">
          <Heading/>
          <Display display={display}/>
          <Buttons
            buttons={buttons} 
            handleButtonClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
}

export default App;
