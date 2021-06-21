import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {
  const show = useSelector(state => state.sidebarShow)
  useEffect(() => {
      if(show){
        document.getElementById('wrapperDiv').style.marginLeft = "256px"
      }
      else{
        document.getElementById('wrapperDiv').style.marginLeft = "0px"
      }
  },[]);

  return (
    <div>
        {/* {
            isLoggedIn()===false &&
            <Redirect to="/login"/>
        } */}
        <div className="c-app c-default-layout">
        <TheSidebar/>
        <div className="c-wrapper" id="wrapperDiv">
            <TheHeader/>
            <div className="c-body">
            <TheContent/>
            </div>
            <TheFooter/>
        </div>
        </div>
    </div>
  )
}

export default TheLayout
