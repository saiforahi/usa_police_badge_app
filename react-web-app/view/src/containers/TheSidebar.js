import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react';
// sidebar nav config
import { API } from '../config'
import { useHistory } from 'react-router'
import '../assets/warehouse.svg'
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
      <CSidebarBrand className="d-md-down-none" to="/">
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
        {/* <CIcon
          className="c-sidebar-brand-minimized"
          name="cilShieldAlt"
          height={35}
        /> */}
        <i className="cil-shield-alt"></i>
        {/* <h4 id="logoText" style={{marginTop:"12px", marginLeft:"5px"}} class="display-6">Smart Guard</h4> */}
        
      </CSidebarBrand>
      <CSidebarNav>
        <CSidebarNavItem to="/dashboard" icon="cil-speedometer" name="Dashboard"></CSidebarNavItem>
        <CSidebarNavTitle>Administration</CSidebarNavTitle>
        <CSidebarNavItem to="/dashboard/employees" onClick={()=>{history.push('/dashboard/users/show')}} icon="cil-group" name="Employees"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/badges" icon="cil-circle" name="Badges"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/control/show" icon="cil-tag" name="Site Control"></CSidebarNavItem>
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
