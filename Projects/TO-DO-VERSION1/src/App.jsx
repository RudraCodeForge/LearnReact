import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import './App.css';
function App() {
  return (
    <center>
      <div className="container text-center">
        <AppName />
        <AddToDo />
        <TodoList task = "Buy Milk" date = "12/02/2005" />
        <TodoList task = "Learn react" date = "25/07/2025" />
        </div>
    </center>
  );
}

export default App;
