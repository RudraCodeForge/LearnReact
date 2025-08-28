const USEMEMO = () =>{
  return (
    <div className="container mt-3">
      <h1 className="text-center ">
        THE USEMEMO HOOK
      </h1>
      <ol>
        <li>
          <span className="First">
            Memoization : 
          </span>
          Use meme catch the result of expansive calculation to enhance performance.
        </li>

        <li>
          <span className="First">
            Re-computation : 
          </span>
          Only re-compute the memorized value when dependencies change.
        </li>

        <li>
          <span className="First">
            Optimization : 
          </span>
          Helps prevent unnecessary re-renders and computations.
        </li>

        <li>
          <span className="First">
            Dependency Array : 
          </span>
          Uses an array of dependencies to determine when to re-compute the value.
        </li>

        <li>
          <span className="First">
            Comprision with useCallback : 
          </span>
          When useCallback is used to memoize a function, useMemo is used to memoize a value.
        </li>

        <li>
          <span className="First">
            Best Use : 
          </span>
          Ideal for expansive calculations, like sorting, filtering, or transforming data.
        </li>
      </ol>
    </div>
  )
}
export default USEMEMO;