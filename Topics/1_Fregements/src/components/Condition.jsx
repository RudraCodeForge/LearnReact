const Condition = () => {
  let arr = ["Dal"];
  if (arr.length === 0){
    return <h1 className="text-center">No Data Found</h1>
  }
  return (
    <>
      <div className="container my-4">
        <h1 className="text-center mb-4 ">CONDITIONS</h1>
        <ul className="list-group mb-4">
          <li className="list-group-item active" aria-current="true">
            Healthy Food
          </li>
          {arr.map((no) => (
            <li key = {no} className="list-group-item">{no}</li>
          ))}
        </ul>
        <p className="text-justify">
        </p>
      </div>
    </>
  );
};
export default Condition ;
