import React from 'react'
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
  CContainer
} from '@coreui/react'
import './SiteControl.css'
const SiteControl = () => {
  return (
    <CTabs activeTab="details" >
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
          <CContainer>
          <CRow className="justify-content-center">
            <CCol className="col-md-10 offset-md-1 col-sm-12 col-xs-12">
              <CCard className="custom-card">

                <CRow>
                  <CCol className="col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0">
                    <CFormGroup>
                      <CLabel htmlFor="ccmonth" className="custom-label">Select Department</CLabel>
                      <CSelect custom name="ccmonth" id="ccmonth">
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
                  <CCol className="col-md-10 offset-md-1 col-sm-12">
                    <CFormGroup>
                      <CLabel htmlFor="companyName" className="custom-label">Company Name</CLabel>
                      <CInput id="companyName" />
                      <CValidFeedback>Cool! Input is valid</CValidFeedback>
                    </CFormGroup>
                  </CCol>
                  <CCol className="col-md-12">
                    <div className="text-center mt-2">
                      <img src={'avatars/3.jpg'} class="rounded-circle person-img" alt="..." />
                      <p className="all-text">Supervisor Profile Picture</p>
                    </div>


                  </CCol>
                  <CCol className="col-md-10 offset-md-1 col-sm-12">
                    <CFormGroup>
                      <CLabel htmlFor="supContactName" className="custom-label">Supervisor Contact Name</CLabel>
                      <CInput id="supContactName" />
                      <CValidFeedback>Cool! Input is valid</CValidFeedback>
                    </CFormGroup>
                  </CCol>
                  <CCol className="col-md-10 offset-md-1 col-sm-12">
                    <CFormGroup>
                      <CLabel htmlFor="address" className="custom-label">Address</CLabel>
                      <CInput id="address" />
                      <CValidFeedback>Cool! Input is valid</CValidFeedback>
                    </CFormGroup>
                  </CCol>
                  <CCol className="col-md-5 offset-md-1 col-sm-12">
                    <CFormGroup>
                      <CLabel htmlFor="phone" className="custom-label">Phone</CLabel>
                      <CInput id="phone" />
                      <CValidFeedback>Cool! Input is valid</CValidFeedback>
                    </CFormGroup>
                  </CCol>
                  <CCol className="col-md-5 col-sm-12">
                    <CFormGroup>
                      <CLabel htmlFor="email" className="custom-label">Email</CLabel>
                      <CInput id="email" />
                      <CValidFeedback>Cool! Input is valid</CValidFeedback>
                    </CFormGroup>
                  </CCol>
                  <CCol className="col-md-10 offset-md-1 col-sm-12 text-center">
                    <CButton color="primary" className="button-primary px-4 mt-3">
                      Submit
                    </CButton>
                  </CCol>
                </CRow>

              </CCard>
            </CCol>
          </CRow>
          </CContainer>


        </CTabPane>
        <CTabPane data-tab="features">
          456
        </CTabPane>
      </CTabContent>
    </CTabs>
  )
}

export default SiteControl