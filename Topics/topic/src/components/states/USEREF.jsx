import { useRef } from "react";

import { useRef } from "react";

const USEREF = () => {
  const Name = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();
    alert(Name.current.value);
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center">USE REF</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4 rounded-3">
            <h2 className="text-center mb-4">USE REF Example</h2>
            <form onSubmit={SubmitHandler}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Enter Your Name
                </label>
                <input
                  ref={Name}
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name..."
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ol>
        <li>Use ref allow access to DOM elements and retains mutable value without re-render.</li>
        <li>Used with ref attribute for direct DOM interaction.</li>
        <li>Can hold previous State or props values.</li>
        <li>Not limited to DOM reference it can hold any value.</li>
        <li>Ref can be passed as props also.</li>
      </ol>
    </div>
  );
};

export default USEREF;