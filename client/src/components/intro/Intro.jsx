import "./intro.scss"

export default function Intro() {
  return (
    <div className='intro' id='intro'>
     <div className="left">
      
       <div className="imgContainer">
         <img src="assets/img1.png" alt="" />
        </div>

     </div>
     <div className="right">
        <div className="wrapper">
          <h2>
            Hi, Welcome to My Website
          </h2>
          <h2>I'm</h2>
          <h1>
            Azhar Mukhlisin
          </h1>
          <h3>
           Freelance and  Collage Student
          </h3>
        </div>
     </div>
    </div>
  )
}
