import React, { useState,useEffect, useLayoutEffect } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import {TOKEN} from '../config'
import {Redirect, useHistory} from "react-router"
import { WebSocketBridge } from 'django-channels'
import CardSwipped from 'src/components/swipe/CardSwipped'
import swal from '@sweetalert/with-react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from 'src/store/DashboardSlice';
import { initiate } from 'src/store/CardSwipeSlice';

const TheLayout = () => {
  const history=useHistory()
  const dispatch = useDispatch()
  let web_socket=new WebSocketBridge()
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
      dispatch(fetchDashboardData())
      swal({
        content:(<CardSwipped data={event.data}/>),
        buttons:['Close']
      })
    });
  },[])
  return (
    <>
    {
        isLoggedIn()===false &&
        <Redirect to="/login"/>
    }
    <div className="c-app c-default-layout">
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
