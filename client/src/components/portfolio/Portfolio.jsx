import "./portfolio.scss"


export default function Portfolio() {
  return (
    <div className="portfolio" id='portfolio'>
  
      
      <div className="imgContainer">
        <img src="assets/sosial.png" alt="" />
       </div>
       <hr size="10px" width="70%"/>
      <h1>Social Media</h1>
      <ul>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Line</li>
      </ul>
      <div className="container">
        <div className="ig">
          <img src="assets/ig.png" alt="" />
          
        </div>
        <div className="ig">
        <img src="assets/twit.png" alt="" />
        </div>
        <div className="fb">
        <img src="assets/fb.png" alt="" />
        </div>
        <div className="fb">
        <img src="assets/wa.png" alt="" />
        </div>
      </div>

    </div>
  )
}
