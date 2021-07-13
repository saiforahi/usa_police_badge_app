import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavItem,
  CLabel
} from '@coreui/react'
//import { CIcon } from '@coreui/icons-react';

import { useHistory } from 'react-router'
import '../assets/warehouse.svg'
import './TheSidebar.css'
import { changeState } from 'src/store/slices/SideBarSlice';
const TheSidebar = () => {
  const dispatch = useDispatch()
  let history=useHistory()
  const show = useSelector(state => state.sidebar.sidebarShow)
  const badge = useSelector(state => state.user.data.badge_number)
  const [group,setGroup] = React.useState('')
  useEffect(()=>{
    setGroup(localStorage.getItem('group'))
  },[])
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch(changeState(val))}
    >
      <CSidebarBrand className="d-md-down-none text-center" to="/">

        {/* <CIcon
          name="cil-shield-alt"
          height={25}
        /> */}
        <img src={'assets/images/nypd.png'} className="sidebar-brand"/>
      </CSidebarBrand>
      {group == 'officer' && <CSidebarBrand className="d-md-down-none text-center">
        Badge : {badge}
      </CSidebarBrand>}
      
      {group == 'admin' && <CSidebarNav>
        <CSidebarNavItem to="/dashboard" icon="cil-speedometer" name="Dashboard"></CSidebarNavItem>
        <CSidebarNavTitle>Administration</CSidebarNavTitle>
        <CSidebarNavItem to="/dashboard/employees" onClick={()=>{history.push('/dashboard/users/show')}} icon="cil-group" name="Employees"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/departments" icon="cil-control" name="Departments"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/badges" icon="cil-badge" name="Badges"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/scan-history" icon="cil-people" name="Scans"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/sitecontrol" icon="cil-control" name="Site Control"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/time" icon="cil-clock" name="Time"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/account" icon="cil-calculator" name="Account"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/billing" icon="cil-money" name="Billing"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/contacts" icon="cil-people" name="Contacts"></CSidebarNavItem>
      </CSidebarNav>}

      { /*officer side nav*/ }

      {group == 'officer' && <CSidebarNav>
        <CSidebarNavItem to="/dashboard" icon="cil-speedometer" name="Dashboard"></CSidebarNavItem>
        <CSidebarNavTitle>Personal Account</CSidebarNavTitle>
        <CSidebarNavItem to="/dashboard/account/personal" onClick={()=>{history.push('/dashboard/account/personal')}} icon="cil-notes" name="Account"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/account/time" onClick={()=>{history.push('/dashboard/account/time')}} icon="cil-clock" name="Time"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/account/badge" onClick={()=>{history.push('/dashboard/account/badge')}} icon="cil-credit-card" name="My Badge"></CSidebarNavItem>
        <CSidebarNavItem to="/dashboard/account/contacts" onClick={()=>{history.push('/dashboard/account/contacts')}} icon="cil-people" name="Contacts"></CSidebarNavItem>
      </CSidebarNav>}

      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
