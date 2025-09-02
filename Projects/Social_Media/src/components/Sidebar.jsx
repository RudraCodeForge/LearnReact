import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: "🏠",
      description: "View all posts"
    },
    {
      path: "/add-post",
      label: "Create Post",
      icon: "✏️",
      description: "Share your thoughts"
    }
  ];
  
  return(
    <div className="sidebar">
      <div className="sidebar-header mb-4">
        <h5 className="text-primary fw-bold mb-1">📱 Navigation</h5>
        <p className="text-muted small mb-0">Explore and create content</p>
      </div>
      
      <div className="nav flex-column">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path}
              to={item.path} 
              className={`nav-link sidebar-link ${isActive ? 'active' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="d-flex align-items-center">
                <span className="sidebar-icon me-3">{item.icon}</span>
                <div className="flex-grow-1">
                  <div className="sidebar-label">{item.label}</div>
                  <div className="sidebar-description">{item.description}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      
      <div className="sidebar-footer mt-4 pt-3 border-top">
        <div className="d-flex align-items-center justify-content-center">
          <small className="text-muted">
            <i className="me-1">⚡</i>
            Developed By Prince Daksh
          </small>
        </div>
      </div>
    </div>
  )
}
export default Sidebar;