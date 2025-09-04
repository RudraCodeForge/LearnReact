const REDUX =()=>{
  return(
    <div className="container">
      <h1 className="text-center">REDUX</h1>
      <img className="propsimg" src='./Redux.jpg' alt="REDUX" />
      <ol>
        <li>
          <span className="First">
            State Management : 
          </span>
          for cross component or app-wide state.
        </li>

        <li>
          <span className="First">  
            Redux : 
          </span>
          is a predictive state management library for JavaScript.
        </li>

        <li>
          <span className="First"> 
            Local State : 
          </span>
          vs Cross-component state vs App-wide state.
        </li>

        <li>
          <span className="First"> 
            useState or useReducer : 
          </span>
          with the prop drilling vs useState or useContext or Redux.
        </li>
      </ol>
    </div>
  )
}
export default REDUX;