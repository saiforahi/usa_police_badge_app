import React from 'react'
import { CIcon } from '@coreui/icons-react'
import './header.css'
import{Navbar,Nav,Button}from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Header =()=>{
    return(
      <>
      <Navbar  expand="lg" className="pt-6">
        <Navbar.Brand to="/" className="brand"><img src={'assets/images/logo-home-demo.svg'}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="pb-2"/>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mr-auto padding-desktop">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/">Our Team</Nav.Link>
            <Nav.Link to="/">Facebook Feed</Nav.Link>
            <Nav.Link to="/">Contact</Nav.Link>
          </Nav>
          {localStorage.getItem('access_token')? <Link to="/dashboard" className="btn btn-outline-success ml-auto sign-btn d-md-none">Dashboard</Link>:<Link to="/login" className="btn btn-outline-success ml-auto sign-btn d-md-none">Login</Link>}
        </Navbar.Collapse>
      </Navbar>
      </>
    )
   
}
export default Header