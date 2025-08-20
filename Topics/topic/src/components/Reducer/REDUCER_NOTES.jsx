const REDUCER_NOTES = () => {
  return (
    <div className="container">
      <h1 className="text-center">USE REDUCER</h1>
      <p>
        <span className="First">useReducer </span>: is a hook in react that
        offers more control over state operations compared to useState
        especially for complex state logic.
      </p>
      <ol>
        <li>
          <span className="First">Components: </span>
          Its involve to main Components:
          <ul>
            <li>
              <span className="First">REDUCER: </span>
              A pure function that takes the current state and an action and return a new state.
            </li>
            <li>
              <span className="First">ACTION: </span>
              An object that describes the type of action and any data needed to perform the action.
            </li>
          </ul>
        </li>
        <li>
          <span className="First">Initialisation: </span>
          It invoked as const[state, dispatch] = useReducer(reducer, initialState)
        </li>
        <li>
          <span className="First">Dispatch: </span>
          Actions are dispatch useing the dispatch function, which invoke the reducer with current state and given action.
        </li>
        <li>
          <span className="First">Use Case: </span>
          Particularly useful for complex state logic, managing multiple state variables, or when state transitions depend on previous state.
        </li>
        <li>
          <span className="First">Predictable state management: </span>
          Due to its pure function nature, useReducer ensures Predictable state management.
        </li>
      </ol>
    </div>
  );
};
export default REDUCER_NOTES;
