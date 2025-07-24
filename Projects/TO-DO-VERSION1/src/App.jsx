
import './App.css'

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center text-primary mb-4">TO-DO LIST</h1>
          <div className="alert alert-success" role="alert">
            Bootstrap is successfully installed and working!
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Ready to build your TO-DO app</h5>
              <p className="card-text">
                Bootstrap CSS classes are now available throughout your application.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
