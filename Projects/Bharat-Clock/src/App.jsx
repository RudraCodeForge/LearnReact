import AppName from './components/AppName';
import AppMoto from './components/AppMoto';
import Show from './components/Show';
import './App.css'

function App() {
  
  return (
    <div className="container-fluid bg-dark text-white min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <AppName/>
        <AppMoto/>
        <Show/>
      </div>
    </div>
  )
}

export default App
