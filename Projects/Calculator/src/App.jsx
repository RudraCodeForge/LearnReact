

function App() {
  let buttons = ["C","/","*","7","8","9","-","4","5","6","+","1","2","3","=","0","00"]
  return (
    <div id="Calculator">
      <input type="text" id="display" placeholder="0"/>
      <div id="buttons">
        {buttons.map((button) => {
          return <button>{button}</button>
        })}
      </div>
    </div>
  )
}

export default App
