
const TodoList = (props) => {
  return (
    <div className="todo-item">
      <div className="row align-items-center">
        <div className="col-md-1 text-center">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id={`task-${props.task}`}
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="task-text">
            <i className="fas fa-check-circle text-success me-2"></i>
            {props.task}
          </div>
        </div>
        <div className="col-md-4">
          <div className="task-date">
            <i className="fas fa-calendar me-2 text-primary"></i>
            {props.date}
          </div>
        </div>
        <div className="col-md-2 text-end">
          <button className="btn btn-delete">
            <i className="fas fa-trash me-1"></i>Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
