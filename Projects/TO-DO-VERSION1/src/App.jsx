
import './App.css'

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center text-primary mb-4">TO-DO LIST</h1>
          <div className="card shadow">
            <div className="card-body">
              <div className="input-group mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Add a new task..."
                />
                <button className="btn btn-primary" type="button">
                  Add Task
                </button>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Sample task
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
