import React from 'react'
import { CIcon } from '@coreui/icons-react'
import './header.css'
import{Navbar,Nav,Button}from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom'

const Header =()=>{
  let history = useHistory()
    return(
      <>
      <Navbar  expand="lg" className="pt-6">
        <Navbar.Brand onClick={()=>{history.push('/')}} className="brand"><img src={'assets/images/nypd.png'}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="pb-2"/>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mr-auto padding-desktop">
            <Nav.Link onClick={()=>{history.push('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{history.push('/')}}>Our Team</Nav.Link>
            <Nav.Link onClick={()=>{history.push('/')}}>Facebook Feed</Nav.Link>
            <Nav.Link onClick={()=>{history.push('/')}}>Contact</Nav.Link>
          </Nav>
            {/* <Link to="/login" className="btn btn-outline-success ml-auto sign-btn">{localStorage.getItem('access_token')? 'Dashboard':'Sign In'}</Link> */}
          {localStorage.getItem('access_token')? <Link to="/dashboard" className="btn btn-outline-success ml-auto sign-btn">Dashboard</Link>:<Link to="/login" className="btn btn-outline-success ml-auto sign-btn">Login</Link>}
        </Navbar.Collapse>
      </Navbar>
      </>
    )
   
}
export default Header