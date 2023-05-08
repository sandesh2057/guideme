import React from 'react'
import { useState } from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'

export default function Login() {
const[close, setclose]= useState(true);
const handleclose = ()=>{
setclose(false);
}
return(
  <>
{close?
<div className="mainForm">
<FontAwesomeIcon className="close" onClick={handleclose} icon={faCircleXmark} />
<form className="signup-form border bg-light">
<div className="row m-3">
<div className="col">
<h1>Sign up</h1>
<h6>It's quick and easy.</h6>
</div>
</div>
<div className="row m-3">
<div className="col">
<input type="text" className="form-control bg-light" placeholder="First name"/>
</div>
<div className="col">
<input type="text" className="form-control bg-light" placeholder="Last name"/>
</div>
</div>
<div className="row m-3">
<div className="col">
<input type="email" className="form-control bg-light" id="inputEmail4" placeholder="Email"/>
</div>
</div>
<div className="row m-3">
<div className="col">
<input type="password" className="form-control bg-light" id="inputPassword4" placeholder="Password"/>
</div>
</div>
<div className="row m-3 p-0 w-80">
<label className="mx-3 m-1" htmlfor="Gender">Gender</label>
<div className="col text-center " >
<div className="form-check form-check-inline">
  <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" htmlfor="inlineRadio1">Female</label>
</div>
<div className="form-check form-check-inline px-5 ">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlfor="inlineRadio2">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label className="form-check-label" htmlfor="inlineRadio3">Other</label>
</div>
</div>
</div>
<button type="submit" className="btn btn-primary mx-auto d-block m-4 w-50">Sign up</button>
  <div className="text-center"></div>
</form>
</div>:""}
</>
);

}
