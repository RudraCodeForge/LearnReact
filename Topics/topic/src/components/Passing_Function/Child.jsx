import {useState} from 'react';
import styles from './Child.module.css';
const Child = (props) =>{
  const [name,setName] = useState("");
  const handleChange =(e)=>{
    setName(e.target.value);
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    props.SubmitHandler(name);
  }
  return(
    <div className="container">
      <h1 className="text-center">TWO WAY BINDING</h1>
      <button
        className="btn btn-primary"
        onClick={props.HandleClick}>
        Click me
      </button>
      <ol>
        <li><span>Pass</span> dynamic Behaviour between components</li>
        <li><span>Enable </span> upward communication between child to parent</li>
        <li><span>Commonaly Used </span> for event handling</li>
        <li><span>Enchance </span> components interactivity</li>
        <li><span>Example </span> Click me button on top or this form data are taking input by child and show the data by parent component</li>
      </ol>
      <br/>
      <form
        className={styles.form}
        onSubmit={handleSubmit}>
        <input 
          placeholder="ENTER YOUR NAME" 
          onChange={handleChange} 
          value={name}/>
        <button type="submit" 
          className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
export default Child;