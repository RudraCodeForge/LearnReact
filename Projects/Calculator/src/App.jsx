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
          <Heading/>
          <Display value={display}/>
          <Buttons buttons={buttons} />
        </div>
      </div>
    </div>
  );
}

export default App;
