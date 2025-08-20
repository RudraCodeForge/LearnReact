import { useRef, useReducer } from "react";
import REDUCER_NOTES from "./REDUCER_NOTES";
const Nameadd = (state, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload.NEWNAME];
  }
  else if (action.type === "DELETE") {
    return state.filter((name) => name !== action.payload);
  }
  return state;
};

const REDUCER_APP = () => {
  const NAME = useRef();
  const [Name, AddNewName] = useReducer(Nameadd, []);

  const ADDNEWNAME = (e) => {
    e.preventDefault();
    let NEWNAME = NAME.current.value.trim();
    if (NEWNAME === "") return;
    AddNewName({ type: "ADD", payload: { NEWNAME } });
    NAME.current.value = ""; // clear input
  };

  const DELETENAME = (name) => {
    AddNewName({ type: "DELETE", payload: name });
  };

  return (
    <div className="container mt-5 mb-4">
      <REDUCER_NOTES/>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">📝 USE_REDUCER Example</h3>
            </div>
            <div className="card-body">
              <form onSubmit={ADDNEWNAME} className="d-flex mb-3">
                <input
                  ref={NAME}
                  type="text"
                  placeholder="Enter Name"
                  className="form-control me-2"
                />
                <button type="submit" className="btn btn-success">
                  ADD NAME
                </button>
              </form>

              {Name.length === 0 ? (
                <p className="text-muted text-center">No names added yet...</p>
              ) : (
                <ol className="list-group list-group-numbered">
                  {Name.map((name, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {name}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => DELETENAME(name)}
                      >
                        DELETE
                      </button>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default REDUCER_APP;