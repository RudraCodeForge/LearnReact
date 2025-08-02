import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  let TODO = [
    { task: "BUY MILK", date: "12/02/2005" },
    { task: "LEARN REACT", date: "25/05/2025" },
    { task: "Complete Bootstrap Design", date: "15/09/2024" },
  ];
  return (
    <div
      className="min-vh-100"
      style={{
        background: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="todo-container">
              <AppName />
              <AddToDo />
              <div className="todo-list">
                {TODO.map((item) => {
                  console.log(item.task,item.date);
                  <TodoList task={item.task} date={item.date} />;
                })}
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
