import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { PostProvider } from "./store/PostContext";
import { SelectContextProvider as SelectProvider } from "./store/SelectContext.jsx";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import { useSelectContext } from "./store/SelectContext";


const App = () => {
  const { selectedTab } = useSelectContext();
  return (
    <SelectProvider>
      <PostProvider>
        <div className="app-container">
          <Header />
          <Sidebar />
          <div className="main-content">
            {selectedTab === "Home" && (
              <>
                <Hero />
                <PostList />
              </>
            )}
            {selectedTab === "Create Post" && <AddPost />}
          </div>
        </div>
      </PostProvider>
    </SelectProvider>
  );
};
export default App;