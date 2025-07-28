
const AddToDo = () => {
  return (
    <div className="todo-form">
      <div className="row g-3 align-items-end">
        <div className="col-md-5">
          <label htmlFor="taskInput" className="form-label fw-bold text-primary">
            <i className="fas fa-tasks me-2"></i>Task
          </label>
          <input 
            type="text" 
            id="taskInput"
            className="form-control" 
            placeholder="Enter your task..." 
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="dateInput" className="form-label fw-bold text-primary">
            <i className="fas fa-calendar-alt me-2"></i>Due Date
          </label>
          <input 
            type="date" 
            id="dateInput"
            className="form-control" 
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-add w-100">
            <i className="fas fa-plus me-2"></i>Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToDo;
