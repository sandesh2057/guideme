
import './App.css';
import Navbar from './components/Navbar';
import Mybody from './components/Mybody';
import Login from './components/Login';
import Signup from './components/Signup';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  
function App() {
  
return (
<>
<Router>
<div className="myPage">
<Navbar title="GuideMe" company="Company" help="Help" explore="Explore"/>
<Mybody/>
<Routes>
    <Route exact path="/loginForm" element={<Login/>} />
    <Route exact path="/signupForm" element={<Signup/>} />

</Routes>

</div>
</Router>

</>

)
}

export default App;
