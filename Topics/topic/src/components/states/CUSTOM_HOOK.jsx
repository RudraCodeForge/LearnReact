const CUSTOM_HOOK =()=>{
    return(
      <div className="container">
        <h1 className="text-center">CUSTOM HOOK</h1>
        <ol>
          <li>
            <span className="First">
              Reusable Logic : 
            </span>
            Custom hook allow you to extract and reuse component logic across multiple components.
          </li>

          <li>
            <span className="First">
              Nameing convention : 
            </span>
            Typically start with "use" Keyword.
          </li>

          <li>
            <span className="First">
              Combining Hook : 
            </span>
            Custom hook can combine multiple built-in hooks.
          </li>

          <li>
            <span className="First">
              Sharing State : 
            </span>
            Enable sharing a stateful logic between components.
          </li>

          <li>
            <span className="First">
              Isolation : 
            </span>
            Helps in isolating the stateful logic from the UI.
          </li>

          <li>
            <span className="First">
              Custom return value : 
            </span>
            Can return any value, not just state and setState.
          </li>
        </ol>
      </div>
    )
}
export default CUSTOM_HOOK;