import React, { useState } from "react";
import {
    CTabs,
    CBadge,
    CNav,
    CNavLink,
    CNavItem,
    CTabContent,
    CTabPane,
    CCard,
    CRow,
    CCol,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CDataTable,
    CButton,
    CContainer,
    CFormGroup,
    CSelect,
    CLabel,
    CInput,
    CValidFeedback,
    CForm,
    CModal,
 
  } from "@coreui/react";
  import { useHistory } from "react-router-dom";
  const Department=()=>{
      return (
          <>
           <CContainer>
              <CRow className="justify-content-center">
                <CCol md="10" sm="12" xs="12">
                  <CCard className="custom-card">
                    <h4 className="table-header text-center">Add Department</h4>
                    <CForm action="" method="post">
                      <CRow className="justify-content-center">
                        {/**Name */}
                        <CCol md="8" sm="12" xs="12">
                          <CFormGroup>
                            <CLabel htmlFor="name" className="custom-label">
                             Department Name
                            </CLabel>
                            <CInput id="name" />
                            <CValidFeedback>
                              Cool! Input is valid
                            </CValidFeedback>
                          </CFormGroup>
                        </CCol>
                        {/**__SUPERVISOR NAME */}
                        <CCol md="8" sm="12" xs="12">
                          <CFormGroup>
                            <CLabel htmlFor="supName" className="custom-label">
                             Department Head/Supervisor Name
                            </CLabel>
                            <CInput id="supName" />
                            <CValidFeedback>
                              Cool! Input is valid
                            </CValidFeedback>
                          </CFormGroup>
                        </CCol>
                        {/**Phone */}
                        <CCol md="8" sm="12" xs="12">
                          <CFormGroup>
                            <CLabel htmlFor="phone" className="custom-label">
                             Department Phone Number
                            </CLabel>
                            <CInput id="phone" />
                            <CValidFeedback>
                              Cool! Input is valid
                            </CValidFeedback>
                          </CFormGroup>
                        </CCol>
                        {/**email */}
                        <CCol md="8" sm="12" xs="12">
                          <CFormGroup>
                            <CLabel htmlFor="email" className="custom-label">
                              Department Email
                            </CLabel>
                            <CInput id="email" />
                            <CValidFeedback>
                              Cool! Input is valid
                            </CValidFeedback>
                          </CFormGroup>
                        </CCol>

                        {/**contact type */}
                        <CCol md="8" sm="12" xs="12">
                          <CFormGroup>
                            <CLabel
                              htmlFor="contactType"
                              className="custom-label"
                            >
                              Department Type
                            </CLabel>
                            <CSelect custom name="contactType" id="contactType">
                              <option hidden>Department type</option>
                              <option value="1">Homicide</option>
                              <option value="2">Detective Unit</option>
                              <option value="3">Petrol</option>
                              <option value="4">Motors</option>
                              <option value="5">Narcotics</option>
                            </CSelect>
                          </CFormGroup>
                        </CCol>
                        {/**submit button */}
                        <CCol md="10" sm="12" xs="12" className="text-center">
                          <CButton
                            color="primary"
                            className="button-primary px-4 mt-3"
                          >
                            Create Department
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCard>
                </CCol>
              </CRow>
            </CContainer>
            </>

      )

  }

  export default Department;