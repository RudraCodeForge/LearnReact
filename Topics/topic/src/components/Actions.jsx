const Actions = () => {
  return (
    <div className="container">
      <h1 className="text-center">Submition data using Actions</h1>
      <ol>
        <li>
          <span className="First">
            Action : 
          </span>
          method can used to perform an action on the submission of Form.
        </li>
        
        <li>
          <span className="First">
            Custom Form :  
          </span>
          component can be used along with name attributes for all input.
        </li>

        <li>
          <span className="First">
            Action Function : 
          </span>
          will get an data object. To generate correct request object.
          method="post" attribute should be used in Form tag.
        </li>

        <li>
          <span className="First">
            Data.request.FormData() : 
          </span>
          method can be used to get from data object.
        </li>

        <li>
          <span className="First">
            Object.formEntries(FormData) : 
          </span>
          method can be used to get real input.
        </li>

        <li>
          <span className="First">
            redirect() : 
          </span>
          method can be used to redirect to another page.
        </li>
      </ol>
    </div>
  );
};
export default Actions;
