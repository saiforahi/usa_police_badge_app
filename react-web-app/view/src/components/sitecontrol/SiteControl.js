import React from 'react'
import {
    CTabs,
    CNav,
    CNavLink,
    CNavItem,
    CTabContent,
    CTabPane
  } from '@coreui/react'
const SiteControl =()=>{
    return (
        <CTabs activeTab="details">
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink data-tab="details">
                Organisation Details
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="features">
                Site Features
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane data-tab="details">
              123
            </CTabPane>
            <CTabPane data-tab="features">
              456
            </CTabPane>
          </CTabContent>
        </CTabs>
      )
}

export default SiteControl