import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
  return(
    <div className="sidebar">
      <Link to="/" className={`btn sbtn ${location.pathname === "/" ? "Active" : ""}`}>
        Home
      </Link>
      <Link to="/add-post" className={`btn sbtn ${location.pathname === "/add-post" ? "Active" : ""}`}>
        Create Post
      </Link>
    </div>
  )
}
export default Sidebar;