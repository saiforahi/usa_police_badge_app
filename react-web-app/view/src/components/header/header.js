import {React,useState} from 'react'
import { CIcon } from '@coreui/icons-react'
import './header.css'
import{Navbar,Nav,Button}from 'react-bootstrap';
import {Link, useHistory,NavLink} from 'react-router-dom'

const Header =()=>{
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  let history = useHistory()
    return(
      <>
      <Navbar  expand="lg" className="pt-6" sticky="top" className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <Navbar.Brand onClick={()=>{history.push('/')}} className="brand"><img src={'assets/images/nypd.png'}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="pb-2"/>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mr-auto padding-desktop">
            <Nav.Link onClick={()=>{history.push('/')}} activeClassName="active">Home</Nav.Link>
            <Nav.Link  onClick={()=>{history.push('/')}} activeClassName="active">About</Nav.Link>
            <Nav.Link onClick={()=>{history.push('/')}} activeClassName="active">Contact</Nav.Link>
           
          </Nav>
          <Nav.Link onClick={()=>{history.push('/')}}><span><img src={"assets/images/bell.png"} className="img-fluid mr-2 bell"/>Emergency</span></Nav.Link>
            {/* <Link to="/login" className="btn btn-outline-success ml-auto sign-btn">{localStorage.getItem('access_token')? 'Dashboard':'Sign In'}</Link> */}
            <div class="d-flex ml-auto"> 
            <Link to="/dashboard" className="btn clock-btn mr-3">Clock in</Link>
           <Link> {localStorage.getItem('access_token')? <Link to="/dashboard" className="btn sign-btn">Dashboard</Link>:<Link to="/login" className="btn btn-outline-success ml-auto sign-btn">Login</Link>}</Link>
           
            </div>
         
        </Navbar.Collapse>
      </Navbar>
      </>
    )
   
}
export default Header