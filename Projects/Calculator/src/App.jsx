import styles from './App.module.css';
function App() {
  const buttons = [
    'C', '/', '*', '7',
    '8', '9', '-', '4',
    '5', '6', '+', '1',
    '2', '3', '=', '0', '00'
  ];

  return (
    <div id={styles.calculator} className="text-center">
      <input type="text" id={styles.display}/>
      <div id={styles.buttons}>
        {buttons.map((button, index) =>{
          return <button key={index} id={styles.button}>{button}</button>
        })}
      </div> 
    </div>
  );
}

export default App;
