import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Edit from "./components/edit/Edit";
import "./app.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
    <BrowserRouter>
      <Routes>
          

      <Route path="/" element={<Intro/>}/>
             
      </Routes>
   
      
    </BrowserRouter>
      <Portfolio/>
      <Works/>
     
 
    

      
    </div>
   
    </div>
  );
}

export default App;
