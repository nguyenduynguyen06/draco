import { Link, animateScroll as scroll } from 'react-scroll'
import "./Css/Footer.css";
function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo" style={{fontWeight:'bolder'}}>DRACO</h1>
                <p className="footer-text" style={{fontWeight:'bolder'}}>
                HEPLPING TO NEW HEIGHT
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Address</p>
                <ul>
                  <li>
                  <div  style={{fontSize:'18px'}}> 135 Phuoc Thien, Long Thanh My, District 9, Ho Chi Minh City, Vietnam <br/>
                  </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                  <div  style={{fontSize:'18px'}}> Email:info@dracoholding.com.vn</div>
                  </li>
                  <li>
                  <div  style={{fontSize:'18px'}}>  Hotline:(+84) 907 303 646</div> 
                  </li>
                </ul>
              </div>
            </div>

        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
