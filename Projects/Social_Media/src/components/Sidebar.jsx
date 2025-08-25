import {useSelectContext} from "../store/SelectContext";
const Sidebar=()=>{
  const {select,setSelect}=useSelectContext();
  const ClickHandle=(value)=>{
    setSelect(value);
  }
  return(
    <div className="sidebar">
      <button 
        className={`btn sbtn ${select==="Home"&&"Active"}`}
        onClick={()=>ClickHandle("Home")}>
        Home
      </button>
      <button 
        className={`btn sbtn ${select==="Create Post"&&"Active"}`}
        onClick={()=>ClickHandle("Create Post")}>
        Create Post
      </button>
    </div>
  )
}
export default Sidebar;