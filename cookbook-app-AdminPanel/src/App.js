import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <div>
    <Recipes/>
     <Navbar/>
     <Outlet/>
    </div>
  );
}

export default App;
