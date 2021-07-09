import React, { useEffect } from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { API, BASE_URL } from 'src/config'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser } from 'src/store/slices/UserSlice'

const TheHeaderDropdown = () => {
  const full_name = useSelector(state=>state.user.data.first_name?state.user.data.first_name+' '+state.user.data.last_name:'loading...')
  const profile_pic = useSelector(state => state.user.data.profile_pic)
  let history=useHistory()
  const dispatch = useDispatch()
  const handle_logout=()=>{
    API.get('logout/'+localStorage.getItem('user_id')+'/').then(response=>{
      console.log(response.status)
      if(response.data.success===true){
        localStorage.clear()
        dispatch(resetUser())
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
            src={profile_pic!=null?BASE_URL+profile_pic:'assets/images/avatar.png'}
            className="c-avatar-img"
            alt=''
          />
        </div>
        <span style={{marginLeft:"8px"}}>{full_name}</span>
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
