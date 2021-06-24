import React from 'react'
import './contacts.css'
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
const Contacts=()=>{
    return(
        <>
 <CTabs activeTab="viewContact">
 <CNav variant="tabs" className="tab-style">
 <CNavItem>
          <CNavLink data-tab="viewContact" className="special">
            View Contact
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink data-tab="addContact" className="special">
            Add Contact
          </CNavLink>
        </CNavItem>
 </CNav>
 <CTabContent>
 <CTabPane data-tab="viewContact">
565
 </CTabPane>
 <CTabPane data-tab="addContact">
          456
        </CTabPane>
 </CTabContent>
 </CTabs>
        </>
    )
}
export default Contacts