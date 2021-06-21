import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {CSidebar,CSidebarBrand,CSidebarNav,CSidebarMinimizer,CSidebarNavDropdown,CSidebarNavItem} from '@coreui/react'
import CIcon from '@coreui/icons-react'

function wrapperHandler(){
  if(document.getElementById('wrapperDiv')){
    console.log(document.getElementById('wrapperDiv').style.marginLeft)
    document.getElementById('wrapperDiv').style.marginLeft = "0px"
  }
  else{
    console.log('no wrapper')
  }
}

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.sidebarShow)
  React.useEffect(()=>{
    //console.log(JSON.parse(localStorage.getItem('menu')));
  })
  return (
    <div>
    <CSidebar show={show} onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}>
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon className="c-sidebar-brand-full" name="logo-negative" height={35}/>
        <CIcon className="c-sidebar-brand-minimized" name="sygnet" height={35}/>
      </CSidebarBrand>
      <CSidebarNav>
        <CSidebarNavItem to="/dashboard" name="Dashboard" icon="cil-speedometer"></CSidebarNavItem>
        
        <CSidebarNavDropdown name="Employees" icon="cil-file" >
          <CSidebarNavItem to="/dashboard/employees" name="Employees" />
        </CSidebarNavDropdown>
        <CSidebarNavItem to="/dashboard/help" name="Help" icon="cill-file"/>
        
        {/* <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        /> */}
      </CSidebarNav>
      <CSidebarMinimizer onClick={wrapperHandler()} className="c-d-md-down-none"/>
    </CSidebar>
    </div>
  )
}

export default React.memo(TheSidebar)
