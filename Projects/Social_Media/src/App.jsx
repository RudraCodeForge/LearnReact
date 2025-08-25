import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { SelectContextProvider } from "./store/SelectContext.jsx";

const App = () => {
  return (
    <>
      <Header />
      <div className="shcon">
        <SelectContextProvider>
          <Sidebar />
          <Hero />
        </SelectContextProvider>
      </div>
    </>
  );
};
export default App;
