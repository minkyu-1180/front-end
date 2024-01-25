// Navbar.js
import './Navbar.css'; // Navbar에 대한 스타일을 담은 CSS 파일

function Greeting () {

}
function Navbar() {
  return (
    <div className="navbar">
      <div>
      {/* <div className="left-section"> */}
        <img src={process.env.PUBLIC_URL + "/images/logo001.png"} alt="Logo" className="logo" />
      </div>
      <div>
        <span className=" company-name">Health'schedule</span>
      </div>  
      <div>
        <img src={process.env.PUBLIC_URL + "/images/logo001.png"} alt="Logo" className="logo" />
      </div>
      {/* <div className="right-section">
        <span className="greeting">안녕하세요!</span>
      </div> */}
    </div>
  );
}

export default Navbar;