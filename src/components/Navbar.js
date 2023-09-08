import { useState,useEffect} from 'react'
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faBed} from '@fortawesome/free-solid-svg-icons'
import {faPlane} from '@fortawesome/free-solid-svg-icons'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'
import {faFutbol} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  // yo usemediaQuery, matches ko kaam vaneko sano screen huda kholeko popdown thulo screen huda aafai hatne ho
  const matches = useMediaQuery('(max-width: 990px)')

  function useMediaQuery( query, defaultMatches = window.matchMedia(query)){
  const [matches, setMatches] = useState(defaultMatches)
    useEffect(() =>{
      const media = window.matchMedia(query);
      if (media.matches !== matches) {setMatches(media.matches)};
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return() => media.removeListener(listener)

    }, [query, matches])

    return matches;
  }


  const[popdown, setDown]= useState("false");
  const[menu, setMenu]= useState("false"); // smallscreen company menu
  const[submenu, setSubmenu]= useState("false"); // smallscreen explore menu
  const[subproducts, setSubproducts]= useState("false"); // smallscreen explore menu
  const[popup, setPop]= useState("");
  const[text, setText]= useState("");
  const[data, setData]= useState("");



 const companyopen =()=>{
setMenu(!menu);

 }
 const exploreopen =()=>{
setSubmenu(!submenu);
 }
 const productsopen =()=>{
setSubproducts(!subproducts);
 }
 
const handlepopdown =()=>{
  setDown(!popdown);

}
  const handlelogin = ()=>{
    setPop(true);
    setText("Log in");
    setData("/loginForm");
  }
  const handlesignin = ()=>{
    setPop(true);
    setText("Sign up");
    setData("/signupForm");
  }
  const handleclose = ()=>{
    setPop(false);
    setDown(false);
  }
  
  return (
<>
<nav className="navbar navbar-expand-lg navbar-light ">
<div className="container-fluid">
<Link className="navbar-brand" to="/guideme">{props.title}</Link>

{/* nav bar smallscreen dropdown icon */}
<button className="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon" onClick={handlepopdown}></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {props.company}   <FontAwesomeIcon className="fontawesomeDown" icon={faChevronDown}/>
      </Link>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><Link className="dropdown-item" to="/">About us</Link></li>
        <li><Link className="dropdown-item" to="/">Our offerings</Link></li>
        <li><Link className="dropdown-item" to="/">How GuideMe works</Link></li>
        <li className="nav-item dropend">
      <Link className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {props.explore}  <FontAwesomeIcon className="fontawesomeRight" icon={faChevronRight}/>
      </Link>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><Link className="dropdown-item" to="/">Guides near me</Link></li>
        <li><Link className="dropdown-item" to="/">Popular routes</Link></li>
        <li><Link className="dropdown-item" to="/">Hotels near me</Link></li>
          </ul>
    </li>
          </ul>
    </li>
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/">{props.help}</Link>
    </li>
  </ul>
  <form className="d-flex">
    <div className="dropdown">
<button className="btn Products" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
  Products
</button>
<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
  <li><button className="dropdown-item" type="button"><FontAwesomeIcon className="fontProducts" icon={faHouse}/> Home</button></li>
  <li><button className="dropdown-item" type="button"><FontAwesomeIcon className="fontProducts" icon={faPlane}/> Tour</button></li>
  <li><button className="dropdown-item" type="button"><FontAwesomeIcon className="fontProducts" icon={faBed}/> Stay</button></li>
  <li><button className="dropdown-item" type="button"><FontAwesomeIcon className="fontProducts" icon={faUtensils}/> Eat</button></li>
  <li><button className="dropdown-item" type="button"><FontAwesomeIcon className="fontProducts"  icon={faFutbol} />Adventure</button></li>
</ul>
</div>
  </form>
</div>

{/* login sign up buttons */}

<Link className="btn btns Login" to="/" role="button" onClick={handlelogin} >Log in</Link>
<Link className="btn btns Signup" to="/" role="button" onClick={handlesignin} >Sign up</Link>

</div>
</nav>

  {/* popup login-signup page */}
  {popup?
<div className="main">
   <FontAwesomeIcon className="close" onClick={handleclose} icon={faCircleXmark} />
  <Link className="btn  pop-button popEarn" to={data} role="button" onClick={handleclose}>{text} to guide & earn <FontAwesomeIcon className="arrow2"  icon={faArrowRight} /></Link>
  <Link className="btn pop-button popTravel" to={data} role="button" onClick={handleclose}>{text} to travel with us <FontAwesomeIcon className="arrow2"  icon={faArrowRight} /></Link>
  </div>:""}


{/* small screen dropdown */}
{matches ?
 <> 
{popdown?
 <div class="dropdown-main">
  <ul className="dropdownul">
  <li className="dropdownli">
      <Link className="dropdownlink dropdowncompany" to="/"  onClick={companyopen} >
        {props.company} {menu ? <FontAwesomeIcon className="smallfontdowncompany" icon={faChevronUp} size="xs" /> : <FontAwesomeIcon className="smallfontdowncompany" icon={faChevronDown} size="xs" /> }</Link>
  {menu?
      <ul className="companyul">
        <li><Link className="dropdown-item" to="/">About us</Link></li>
        <li><Link className="dropdown-item" to="/">Our offerings</Link></li>
        <li><Link className="dropdown-item" to="/">How GuideMe works</Link></li>
        <li className="dropendli">
        <li><Link className="dropdown-item" to="/"  onClick={exploreopen}>
        {props.explore} { submenu ? <FontAwesomeIcon className="smallfontdownexplore" icon={faChevronUp} size="lg" />:<FontAwesomeIcon className="smallfontdownexplore"  icon={faChevronDown} size="lg" />}</Link>
         </li>
      <ul className="exploreul" >
      {submenu?
      <>
        <li><Link className="dropdown-item" to="/">Guides near me</Link></li>
        <li><Link className="dropdown-item" to="/">Popular routes</Link></li>
        <li><Link className="dropdown-item" to="/">Hotels near me</Link></li>
      </>
        :""}
          </ul>
    </li>
          </ul>
:""}
    </li>
    <li className="dropdownli">
      <Link className="dropdownlink dropdownhelp" to="/">{props.help}</Link>
    </li>
  
 <div className="dropdowndiv">
<li className=" dropdownlink dropdownproducts" onClick={productsopen}>
  Products {subproducts ? <FontAwesomeIcon className="smallfontdownproducts"  icon={faChevronUp} size="xs" /> : <FontAwesomeIcon className="smallfontdownproducts"  icon={faChevronDown} size="xs" />}
</li>
<ul className="productsul" >
{subproducts?
<>
  <li><Link className="dropdown-item" to="/"><FontAwesomeIcon className="fontProducts" icon={faHouse}/> Home</Link></li>
  <li><Link className="dropdown-item" to="/"><FontAwesomeIcon className="fontProducts" icon={faPlane}/> Tour</Link></li>
  <li><Link className="dropdown-item" to="/"><FontAwesomeIcon className="fontProducts" icon={faBed}/> Stay</Link></li>
  <li><Link className="dropdown-item" to="/"><FontAwesomeIcon className="fontProducts" icon={faUtensils}/> Eat</Link></li>
  <li><Link className="dropdown-item" to="/"><FontAwesomeIcon className="fontProducts"  icon={faFutbol} />Adventure</Link></li>
</>
  :""}
  </ul>
</div>

  </ul>
 </div>:""}

 </> :""}
</>);
}


Navbar.propTypes = {
  title: PropTypes.string,
  company:PropTypes.string,
  help:PropTypes.string

}
