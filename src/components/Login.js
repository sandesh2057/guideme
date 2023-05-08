import React from 'react'
import { useState } from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

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
  {/* form for login */}
  <form className="login-form border bg-light p-4">
  <div className="myform form-group">
    <label htmlfor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="myform form-group">
    <label htmlfor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary mx-auto d-block m-3 w-100">Log in</button>
  <div className="text-center">
  <Link className="mx-auto " to="/">Forgot password?</Link>
  </div>
</form>
</div>:""}
</>
);

}
