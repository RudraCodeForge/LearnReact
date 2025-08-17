import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import "./App.css";
import { useState } from "react";

function App() {
  const [TODO, setTODO] = useState([
  ]);
  const ADDTODO = (task, date) => {
    //setTODO([...TODO, { task: task, date: date }]);
    setTODO((PrevTodo)=>{
      return [...PrevTodo, { task: task, date: date}]
    })
  };
  const REMOVETODO = (index) => {
    setTODO(TODO.filter((_, i) => i !== index));
  };
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
              <AddToDo ADDTODO={ADDTODO} />
              <div className="todo-list">
                {TODO.map((item, index) => (
                  <TodoList
                    task={item.task}
                    date={item.date}
                    index={index} // 👈 index bhejo
                    REMOVETODO={REMOVETODO}
                    key={index}
                  />
                ))}
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
