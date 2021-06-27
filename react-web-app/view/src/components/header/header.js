import React from 'react'
import { CIcon } from '@coreui/icons-react'
import './header.css'

import {Link} from 'react-router-dom'

const Header =()=>{
    return(
      <header className="header-main dark">
        <nav>
          <nav>
            <Link to="/" name="Home"><CIcon name="cil-shield-alt" size="2xl"/><span className="logo-imp">SmartGuard</span></Link> 
            <div className="nav-toggle"></div>
              <ul className="inline right" id="toggled-menu">
                <li><Link to= "/login" className="button button-secondary button-m">Log In</Link></li>
              </ul>
            </nav> 
          </nav>
      </header>
    )
   
}
export default Header