import React, { useState,useEffect, useLayoutEffect } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {TOKEN, PUBLIC_API} from '../config'
import {Redirect, useHistory} from "react-router"
import { WebSocketBridge } from 'django-channels'
import CardSwipped from 'src/components/swipe/CardSwipped'
import swal from '@sweetalert/with-react'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TheLayout = () => {
  const history=useHistory()
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
