import React, { useEffect } from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { API } from 'src/config'
import { useHistory } from 'react-router'

const TheHeaderDropdown = () => {
  let history=useHistory()
  const handle_logout=()=>{
    API.get('logout/'+localStorage.getItem('user_id')+'/').then(response=>{
      console.log(response.status)
      if(response.data.success===true){
        localStorage.clear()
        history.push('/login')
      }
      else if(response.status == 401){
        localStorage.clear()
        history.push('/login')
      }
    }).catch(err=>{
      if(err.response.status == "401"){
        localStorage.clear()
        history.push('/login')
      }
    })
  }
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'assets/images/avatar.png'}
            className="c-avatar-img"
            alt=''
          />
         
        </div>
        <span>Admin User</span>
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
        {/* <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem> */}
    
     
        {/* <CDropdownItem divider /> */}
        <CDropdownItem onClick={handle_logout}>
          <CIcon name="cil-account-logout" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
