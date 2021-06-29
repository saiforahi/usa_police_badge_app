import React, { useState,useEffect, useLayoutEffect } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import {TOKEN,API} from '../config'
import {Redirect, useHistory} from "react-router"
import './TheHeader.css'
const TheLayout = () => {
  const history=useHistory()
  const isLoggedIn=()=>{
    if(localStorage.getItem(TOKEN)===null){
      return false;
    }
    return true;
  }
  return (
    <>
    {/* {
        isLoggedIn()===false &&
        <Redirect to="/login"/>
    } */}
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div class="hero-image">

        </div>
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
