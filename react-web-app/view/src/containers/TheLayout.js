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
import { fetchDashboardData } from 'src/store/slices/DashboardSlice';
import { fetchNotificationsThunk } from 'src/store/slices/NotificationSlice'
import { fetchRatingsThunk } from 'src/store/slices/RatingSlice'
import { useSnackbar } from 'notistack';

const TheLayout = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [ratingAlertArrived,setRatingAlertArrived] = useState(false)
  const history=useHistory()
  const dispatch = useDispatch()
  let web_socket=new WebSocketBridge()
  const handleClick = () => {
    setRatingAlertArrived(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setRatingAlertArrived(false);
  };
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
      if(event.data.type == 'review.notification'){
        enqueueSnackbar(event.data.officer_name+' got rated by '+event.data.name,{variant: 'info'})
        dispatch(fetchRatingsThunk())  
      }
      else{
        dispatch(fetchDashboardData())
        dispatch(fetchNotificationsThunk())
        
        swal({
          content:(<CardSwipped data={event.data}/>),
          buttons:['Close']
        })
      }
      // dispatch(fetchDashboardData())
      // dispatch(fetchNotificationsThunk())
      
      // swal({
      //   content:(<CardSwipped data={event.data}/>),
      //   buttons:['Close']
      // })
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
