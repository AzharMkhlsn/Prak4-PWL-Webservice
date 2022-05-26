import "./menuu.scss"


export default function Menu({menuOpen,setMenuOpen}) {
  return (
   <div className={"menuu "+ (menuOpen && "active")}>
       <ul>
           <li onClick={()=> setMenuOpen(false)}>
               <a href="#intro">Home</a>
           </li>
           <li onClick={()=> setMenuOpen(false)}>
               <a href="#portfolio">Portofolio</a>
           </li>
           <li onClick={()=> setMenuOpen(false)}>
               <a href="#work">Works</a>
           </li>
        
         
          
         
       </ul>

   </div>
  )
}