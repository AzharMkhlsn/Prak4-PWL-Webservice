import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">azhr. </a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+628 22 1193 5456</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>azhar.119140180@student.itera.ac.id</span>
          </div>
        </div>
        
        <div className="right">
          <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          </div>

      </div>

    </div>
  )
}
