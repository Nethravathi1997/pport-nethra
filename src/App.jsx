import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/portfolio";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import "./App.scss"
import { useState } from "react"
import Menu from "./components/menu/menu";

function App() {
   const [menuOpen,setMenuOpen] = useState(false);
   return (
    <div className="App">
    <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu  menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
     <div className="sections">
       <Intro />
       <Portfolio />
       <Projects />
       <Contact />
     </div>

    </div>
 
   );
  
}


export default App;
