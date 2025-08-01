const PASS_DATA =({items}) => {
  return(
    <>
      <ul className="list-group mb-4">
          <li className="list-group-item active" aria-current="true">
            Healthy Food
          </li>
          {items.map((no) => (
            <li key = {no} className="list-group-item">{no}</li>
          ))}
        </ul>
    </>
  )
}
export default PASS_DATA;