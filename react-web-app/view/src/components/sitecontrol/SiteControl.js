import React from "react";
import {
  CTabs,
  CNav,
  CNavLink,
  CNavItem,
  CTabContent,
  CTabPane,
  CCard,
  CRow,
  CCol,
  CFormGroup,
  CSelect,
  CLabel,
  CInput,
  CValidFeedback,
  CButton,
  CContainer,
  CForm,
 CInputFile,
 CInputCheckbox
} from "@coreui/react";
import "./SiteControl.css";

const SiteControl = () => {
  return (
    <CTabs activeTab="details">
      <CNav variant="tabs" className="tab-style">
        <CNavItem>
          <CNavLink data-tab="details" className="special">
            Organization Details
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink data-tab="features" className="special">
            Site Features
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane data-tab="details">
          {/* Organization Details */}
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md="10" sm="12" xs="12">
                <CCard className="custom-card">
                  <CForm action="" method="post">
                    <CRow className="justify-content-center">
                      <CCol md="8" sm="12" xs="12">
                        <CFormGroup>
                          <CLabel htmlFor="ccmonth" className="custom-label">
                            Select Department
                          </CLabel>
                          <CSelect custom name="ccmonth" id="ccmonth">
                            <option hidden>Select Department</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                      <CCol md="10" sm="12" xs="12">
                        <CFormGroup>
                          <CLabel
                            htmlFor="companyName"
                            className="custom-label"
                          >
                            Company Name
                          </CLabel>
                          <CInput id="companyName" />
                          <CValidFeedback>Cool! Input is valid</CValidFeedback>
                        </CFormGroup>
                      </CCol>
                      <CCol md="12" sm="12" xs="12">
                        <div className="text-center mt-2">
                          <img
                            src={"avatars/3.jpg"}
                            class="rounded-circle person-img"
                            alt="..."
                          />
                          <p className="all-text">Supervisor Profile Picture</p>
                        </div>
                      </CCol>
                      <CCol md="10" sm="12" xs="12">
                        <CFormGroup>
                          <CLabel
                            htmlFor="supContactName"
                            className="custom-label"
                          >
                            Supervisor Contact Name
                          </CLabel>
                          <CInput id="supContactName" />
                          <CValidFeedback>Cool! Input is valid</CValidFeedback>
                        </CFormGroup>
                      </CCol>
                      <CCol md="3" sm="12" xs="12">
                        <CFormGroup>
                          <CLabel htmlFor="city" className="custom-label">
                            City
                          </CLabel>
                          <CInput id="city" />
                          <CValidFeedback>Cool! Input is valid</CValidFeedback>
                        </CFormGroup>
                      </CCol>
                      <CCol md="3" sm="12" xs="12">
                        <CFormGroup>
                          <CLabel htmlFor="state" className="custom-label">
                            State
                          </CLabel>
                          <CInput id="state" />
                          <CValidFeedback>Cool! Input is valid</CValidFeedback>
                        </CFormGroup>
                      </CCol>
                      <CCol md="3" sm="12" xs="12">
                        <CFormGroup>
                          <CLabel htmlFor="zipc" className="custom-label">
                            Zip Code
                          </CLabel>
                          <CInput id="zipc" />
                          <CValidFeedback>Cool! Input is valid</CValidFeedback>
                        </CFormGroup>
                      </CCol>
                      <CCol md="5" sm="12" xs="12">
                        <CFormGroup>
                          <CLabel htmlFor="phone" className="custom-label">
                            Phone
                          </CLabel>
                          <CInput id="phone" />
                          <CValidFeedback>Cool! Input is valid</CValidFeedback>
                        </CFormGroup>
                      </CCol>
                      <CCol md="5" sm="12" xs="12">
                        <CFormGroup>
                          <CLabel htmlFor="email" className="custom-label">
                            Email
                          </CLabel>
                          <CInput id="email" />
                          <CValidFeedback>Cool! Input is valid</CValidFeedback>
                        </CFormGroup>
                      </CCol>
                      <CCol md="10" sm="12" xs="12" className="text-center">
                        <CButton
                          color="primary"
                          className="button-primary px-4 mt-3"
                        >
                          Submit
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
        </CTabPane>
        {/* Organization Details Ends */}
        {/** SITE FEATURES STARTS */}
        <CTabPane data-tab="features">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md="10" sm="12" xs="12">
                <CCard className="custom-card">
                  <CForm action="" method="post">
                    <CRow className="justify-content-center">
                      {/**LOGO UPLOAD */}
                      <CCol md="8" sm="12" xs="12">
                        <h4 class="all-text">Site Logos</h4>
                        <CFormGroup>
                          <CInputFile   buttonColor="primary" type="file" id="formFile" />
                        </CFormGroup>
                      </CCol>
                      <CCol md="8" sm="12" xs="12">
                         {/**SElect newsfeed location */}
                        <CFormGroup className="show-flex">
                          <CInputCheckbox
                            id="defaultCheck1"
                            label="Default checkbox"
                          />   <CLabel htmlFor="newsfeed" className="custom-label  site-label">
                         Newsfeed
                        </CLabel>
                          <CSelect custom name="newsfeed" id="newsfeed">
                            <option hidden>Location</option>
                            <option value="1">Main Page</option>
                            <option value="2">Sticky Page</option>
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                      {/**SElect about us location */}
                      <CCol md="8" sm="12" xs="12">
                         
                        <CFormGroup className="show-flex">
                          <CInputCheckbox
                            id="defaultCheck2"
                            label="Default checkbox"
                          />   <CLabel htmlFor="aboutus" className="custom-label site-label">
                         About Us
                        </CLabel>
                          <CSelect custom name="aboutus" id="aboutus">
                            <option hidden>Location</option>
                            <option value="1">Main Page</option>
                            <option value="2">Sticky Page</option>
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                       {/**SElect social stream */}
                       <CCol md="8" sm="12" xs="12">
                       <CFormGroup className="show-flex">
                       <CInputCheckbox
                            id="social"
                            label="Default checkbox"
                          /> 
                          <CLabel htmlFor="social" className="custom-label mr-3">
                         Social Stream
                        </CLabel>
                          </CFormGroup>
                       </CCol>
                         {/**SElect Memorial */}
                         <CCol md="8" sm="12" xs="12">
                       <CFormGroup className="show-flex">
                       <CInputCheckbox
                            id="memorial"
                            label="Default checkbox"
                          /> 
                          <CLabel htmlFor="memorial" className="custom-label mr-3">
                        Memorial
                        </CLabel>
                          </CFormGroup>
                       </CCol>
                        {/**commuinty research guide */}
                        <CCol md="8" sm="12" xs="12">
                       <CFormGroup className="show-flex">
                       <CInputCheckbox
                            id="crg"
                            label="Default checkbox"
                          /> 
                          <CLabel htmlFor="crg" className="custom-label mr-3">
                        Community Resource Guide
                        </CLabel>
                          </CFormGroup>
                       </CCol>
                       {/**now hiring */}
                       <CCol md="8" sm="12" xs="12">
                         
                        <CFormGroup className="show-flex">
                          <CInputCheckbox
                            id="defaultCheck2"
                            label="Default checkbox"
                          />   <CLabel htmlFor="hire" className="custom-label site-label">
                         Now Hiring
                        </CLabel>
                          <CSelect custom name="hire" id="hire">
                            <option hidden>Location</option>
                            <option value="1">Main Page</option>
                            <option value="2">Sticky Page</option>
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                      {/**SAve button */}
                      <CCol md="10" sm="12" xs="12" className="text-center">
                        <CButton
                          color="primary"
                          className="button-primary px-4 mt-3"
                        >
                          Save
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCard>
              </CCol>
            </CRow>
          </CContainer>
        </CTabPane>
      </CTabContent>
    </CTabs>
  );
};

export default SiteControl;
