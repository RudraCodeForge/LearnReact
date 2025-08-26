const FatchingData = () => {
  return(
    <div className="container">
      <h1 className="text-center mt-2">DATA FATCHING USING FATCH</h1>
      <ol>
        <li>
          <span className="First">fetch: </span>
          Modern Javascript API for network request.
        </li>
        <li>
          <span className="First">Promise-Based: </span>
          Returns a Promise with a response object.
        </li>
        <li>
          <span className="First">Usage: </span>
          Default is GET for POST use Method 'POST'.
        </li>
        <li>
          <span className="First">RESPONSE: </span>
          Use then() and response.json() for JSON data.
        </li>
        <li>
          <span className="First">Errors: </span>
          Dosen't reject on HTTP errors. Check response ok.
        </li>
        <li>
          <span className="First">Headers: </span>
          Managed using Headers API.
        </li>
      </ol>
    </div>
  )
}
export default FatchingData