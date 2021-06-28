import React from 'react';
import {
    CCard,
    CCardTitle,
    CCardBody,
    CCardText,
    CCardHeader,
    CButton,
  } from "@coreui/react";
  import '../time/Time.css'
const Billing =()=>{
    return (
        <>
          <CCard className="card-style">
            <CCardHeader>Billing</CCardHeader>
            <CCardBody>
              <CCardTitle>Details</CCardTitle>
              <CCardText>
                With supporting text below as a natural lead-in to additional
                content.Content loading ...
              </CCardText>
              <CButton href="#" color="primary">Go somewhere</CButton>
            </CCardBody>
          </CCard>
        </>
      );  
}

export default Billing