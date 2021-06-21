import React, { useState } from 'react'
import {useHistory } from "react-router"
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import avatar from '../assets/images/avatar.png'

const TheHeaderDropdown = () => {
  const history=useHistory();
  const [count,setCount]=useState(0);
  const handle_logout=()=>{
    history.push('/login');
  }
  
  React.useEffect(()=>{
    // console.log(profile);
  },[count])
  return (
    <div>
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={avatar}
            className="c-avatar-img"
            // alt={profile.email}
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem to="/dashboard/help">
          <CIcon name="cil-file" className="mfe-2" /> 
          Help
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={handle_logout}>
          <CIcon name="cil-lock-locked" className="mfe-2" /> 
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    </div>
  )
}

export default TheHeaderDropdown
