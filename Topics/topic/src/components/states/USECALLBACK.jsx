const USECALLBACK =()=>{
  return(
    <div className="container">
      <h1 className="text-center m-2">THE USECALLBACK HOOK</h1>
      <ol>
        <li>
          <span className="First">
            Memorization : 
          </span>
          Preserves function across renders to prevent unnecessary re-renders.
        </li>

        <li>
          <span className="First">
            Optimization : 
          </span>
          Enchances performance by avoiding unnecessary function creations.
        </li>

        <li>
          <span className="First">
            Dependency Array :  
          </span>
          Recreate the function only when specific dependencies change.
        </li>

        <li>
          <span className="First">
            Events Handlers : 
          </span>
          Uses to keep constant function refference for child components.
        </li>

        <li>
          <span className="First">
            With useEffect : 
          </span>
          Prevents infinite loops by ensuring the function remains constant.
        </li>
      </ol>
    </div>
  )
}
export default USECALLBACK;