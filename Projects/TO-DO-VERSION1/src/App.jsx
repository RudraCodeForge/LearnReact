
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  return (
    <div className="min-vh-100" style={{background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="todo-container">
              <AppName />
              <AddToDo />
              <div className="todo-list">
                <TodoList task="Buy Milk" date="12/02/2005" />
                <TodoList task="Learn React" date="25/07/2025" />
                <TodoList task="Complete Bootstrap Design" date="15/01/2024" />
              </div>
              <div className="empty-state">
                <i className="fas fa-tasks me-2"></i>
                Add your tasks above to get started!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
