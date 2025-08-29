import "./App.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import { PostProvider } from "../store/PostContext";
import {Outlet} from "react-router-dom";

const App = () => {
  return (
    <PostProvider>
      <div className="app-container">
        <Header />
        <Sidebar />
        <div className="main-content">
          <Outlet/>
        </div>
      </div>
    </PostProvider>
  );
};
export default App;