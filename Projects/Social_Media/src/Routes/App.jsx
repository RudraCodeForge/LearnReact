import "./App.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import { PostProvider } from "../store/PostContext";
import { SelectContextProvider as SelectProvider } from "../store/SelectContext.jsx";
import PostList from "../components/PostList";
import AddPost from "../components/AddPost";
import { useSelectContext } from "../store/SelectContext";

const AppContent = () => {
  const { select } = useSelectContext();
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <div className="main-content">
        {select === "Home" && (
          <>
            <Hero />
            <PostList />
          </>
        )}
        {select === "Create Post" && <AddPost />}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <SelectProvider>
      <PostProvider>
        <AppContent />
      </PostProvider>
    </SelectProvider>
  );
};
export default App;