import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { PostProvider } from "./store/PostContext";
import { SelectContextProvider } from "./store/SelectContext.jsx";

const App = () => {
  return (
    <>
      <Header />
      <div className="shcon">
        <SelectContextProvider>
          <Sidebar />
          <PostProvider>
            <Hero />
          </PostProvider>          
        </SelectContextProvider>
      </div>
    </>
  );
};
export default App;
