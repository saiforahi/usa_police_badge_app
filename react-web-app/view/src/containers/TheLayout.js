import React, { useState,useEffect, useLayoutEffect } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react'
import {TOKEN, PUBLIC_API} from '../config'
import {Redirect, useHistory} from "react-router"
import { WebSocketBridge } from 'django-channels'
import CardSwipped from 'src/components/swipe/CardSwipped'

function CardSwipModal (){
  console.log('from card swip modal')
  return(
    <CModal visible={true}>
        <CModalHeader>
          <CModalTitle>Details</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h3></h3>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary">
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
    </CModal>
  )
}
const TheLayout = () => {
  const history=useHistory()
  let web_socket=new WebSocketBridge()
  const [messageArrived,setMessageArrived]=useState(false)
  const isLoggedIn=()=>{
    if(localStorage.getItem(TOKEN)===null){
      return false;
    }
    return true;
  }
  useEffect(()=>{
    web_socket.connect('ws://103.123.8.52:8075/nfc/notifications')
    web_socket.addEventListener("message", function(event) {
      console.log(event.data);
      setMessageArrived(true)
      // PUBLIC_API.get("profile/details/"+event.data.user_id+"/").then((res)=>{
      //   switch(event.data.mood){
      //     case "Dangerous":
      //     swal('Danger',res.data.data.first_name+' is in Danger. Phone: '+res.data.data.phone+' Lat: '+res.data.data.lat+' Lang: '+res.data.data.lng,'error')
      //     case "Emergency":
      //       swal('Emergency',res.data.data.first_name+' is in Emergency. Phone: '+res.data.data.phone+' Lat: '+res.data.data.lat+' Lang: '+res.data.data.lng,'warning')
      //     case "Most dangerous":
      //       swal('Most dangerous',res.data.data.first_name+' is in Most Danger. Phone: '+res.data.data.phone+' Lat: '+res.data.data.lat+' Lang: '+res.data.data.lng,'error')
      //     case "Much more dangerous":
      //       swal('Much more dangerous',res.data.data.first_name+' is in Much more Danger. Phone: '+res.data.data.phone+' Lat: '+res.data.data.lat+' Lang: '+res.data.data.lng,'error')
      //   }
      // })
    });
  },[])
  return (
    <>
    {/* {
        isLoggedIn()===false &&
        <Redirect to="/login"/>
    } */}
    <div className="c-app c-default-layout">
    {
        messageArrived == true &&
        <CardSwipModal/>
    }
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>

        <div className="c-body">

          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
    </>
  )
}

export default TheLayout
