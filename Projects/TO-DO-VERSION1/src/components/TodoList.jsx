const TodoList = (props) =>{
  return(
    <div className="row">
          <div className="col-4">
            {props.task}
          </div>
          <div className="col-4">
            {props.date}
          </div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
    
  )
}