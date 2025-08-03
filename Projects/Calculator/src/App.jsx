
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

function App() {
  const [display, setDisplay] = useState('0');

  const buttons = [
    { text: 'C', type: 'clear', span: 2 },
    { text: '⌫', type: 'backspace' },
    { text: '÷', type: 'operator' },
    { text: '7', type: 'number' },
    { text: '8', type: 'number' },
    { text: '9', type: 'number' },
    { text: '×', type: 'operator' },
    { text: '4', type: 'number' },
    { text: '5', type: 'number' },
    { text: '6', type: 'number' },
    { text: '-', type: 'operator' },
    { text: '1', type: 'number' },
    { text: '2', type: 'number' },
    { text: '3', type: 'number' },
    { text: '+', type: 'operator' },
    { text: '0', type: 'number', span: 2 },
    { text: '.', type: 'decimal' },
    { text: '=', type: 'equals' }
  ];

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-gradient">
      <div className={`${styles.calculator} card shadow-lg`}>
        <div className="card-body p-4">
          <h2 className="text-center mb-4 text-primary fw-bold">Calculator</h2>
          
          {/* Display */}
          <div className={`${styles.display} mb-4`}>
            <input 
              type="text" 
              className={`form-control ${styles.displayInput}`}
              value={display}
              readOnly
            />
          </div>

          {/* Buttons Grid */}
          <div className={styles.buttonGrid}>
            {buttons.map((button, index) => (
              <button 
                key={index}
                className={`btn ${styles.calcButton} ${styles[button.type]} ${button.span ? styles[`span${button.span}`] : ''}`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
