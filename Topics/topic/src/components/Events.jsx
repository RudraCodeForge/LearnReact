import styles from './Events.module.css';

const Events = () => {
  let arr =["Apple","Banana","Orange","Green Vegetables"];
  const HandleEvents =(e)=>{
    console.log(e);
    console.log(`${item} add on cart successfully`);
  }
  return (
    <div className="container my-4">
      <h1>Events</h1>
      <ul className="list-group mb-4">
        <li className="list-group-item active" aria-current="true">
          HEALTHY FOODS
        </li>
        {arr.map((item, index) =>{
          return <li className="list-group-item" key={index}>
            {item}
            <button className={`btn-primary ${styles.btn}`} onClick={(e) => HandleEvents(e)}>Buy now</button>
          </li>
        })}
      </ul>
    </div>
  );
};
export default Events;