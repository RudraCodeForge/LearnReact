const USELOADERDATA = () =>{
  return(
    <div className="container">
      <h1 className="text-center">DATA FATCHING USING LOADER</h1>
      <ol>
        <li>
          <span className="First">
            Loader : 
          </span>
          Method can be used to load data before the component is rendered.
        </li>
        <li>
          <span className="First">
            The Loader : 
          </span>
          Method must return the data that is loaded or promise that resolves the data.
        </li>
        <li>
          <span className="First">
            Data : 
          </span>
          is available in component and all the child components using useLoaderData hook.
        </li>
        <li>
          Loading state can also be used.
        </li>
      </ol>
    </div>
  )
}
export default USELOADERDATA;