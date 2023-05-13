import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';


export default function Footer() {
    return(
    <>
<div className="main-Footer">
    <div className="main-logo">Guideme</div>
    <div className="main-items">
    <ul className="footerall Footer-Company">
    <li className="footer-main">Company</li>
    <li><Link className="footer-item" to="/">About us</Link></li>
    <li><Link className="footer-item" to="/">Our offerings</Link></li>
    <li><Link className="footer-item" to="/">How guideme works</Link></li>
    </ul>

    <ul className="footerall Footer-Products">
    <li className="footer-main">Products</li>
    <li><Link className="footer-item" to="/">Tour</Link></li>
    <li><Link className="footer-item" to="/">Stay</Link></li>
    <li><Link className="footer-item" to="/">Eat</Link></li>
    <li><Link className="footer-item" to="/">Adventure</Link></li>
    </ul>

     <ul className="footerall Footer-Contact">
    <li className="footer-main">Contact</li>
    <li><Link className="footer-item" to="/">Safety</Link></li>
    <li><Link className="footer-item" to="/">Help</Link></li>
    <li><Link className="footer-item" to="/">Contact us</Link></li>
    </ul>
    </div>
    <div className="download-logo">
    <Link to="/"><img src="images/googleplay.png" alt="google play"className="playlogo"/></Link>
    <Link to="/"><img src="images/appstore.png" alt="appstore" className="applogo" /></Link>
    </div>
    <div className="copyright">&copy; 2024 Guideme Technologies Inc.</div>
</div>
 </>

)
}