const AddToDo = () => {
  return (
    <div className="row">
      <div className="col-4">
        <input type="text" className="form-control" placeholder="Task" />
      </div>
      <div className="col-4">
        <input type="date" className="form-control" />
      </div>
      <div className="col-2">
        <button className="btn btn-success">Add</button>
      </div>
    </div>
  );
};
export default AddToDo;