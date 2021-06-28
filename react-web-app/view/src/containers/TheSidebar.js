import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavItem
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react';
// sidebar nav config
import { API } from '../config'
import { useHistory } from 'react-router'
import '../assets/warehouse.svg'
import './TheSidebar.css'
const TheSidebar = () => {
  const dispatch = useDispatch()
  let history=useHistory()
  const show = useSelector(state => state.sidebarShow)
  useEffect(()=>{
    API.get()
  },[])
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none text-center" to="/">

        {/* <CIcon
          name="cil-shield-alt"
          height={25}
        /> */}
        <img src={'assets/images/web-logo-2.png'}/>
        <h4 id="logoText" style={{marginTop:"8px", marginLeft:"5px"}} className="display-8 c-sidebar-brand-full">The Accountibility Badge</h4>
      </CSidebarBrand>
      <CSidebarNav>
        <CSidebarNavItem to="/dashboard" icon="cil-speedometer" name="Dashboard"></CSidebarNavItem>
        <CSidebarNavTitle>Administration</CSidebarNavTitle>
        <CSidebarNavItem to="/dashboard/employees" onClick={()=>{history.push('/dashboard/users/show')}} icon="cil-group" name="Employees"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/badges" icon="cil-badge" name="Badges"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/sitecontrol" icon="cil-control" name="Site Control"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/time" icon="cil-clock" name="Time"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/account" icon="cil-calculator" name="Account"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/billing" icon="cil-money" name="Billing"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/contacts" icon="cil-people" name="Contacts"></CSidebarNavItem>
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
