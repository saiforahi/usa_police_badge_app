import React from "react";
import {
  CCard,
  CCardTitle,
  CCardBody,
  CCardText,
  CCardHeader,
  CButton,
} from "@coreui/react";
import "./Time.css";
const Time = () => {
  return (
    <>
      <CCard className="card-style">
        <CCardHeader>Time</CCardHeader>
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
};

export default Time;
