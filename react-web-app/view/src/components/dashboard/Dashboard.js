import {
  CCol,
  CRow,
  CTabs,
  CNav,
  CNavLink,
  CNavItem,
  CTabContent,
  CTabPane,
  CProgress,
  CInput,
  CCardBody,
  CForm,
  CCard,
  CButton,
  CButtonGroup,
  CBadge,
  CDataTable
} from "@coreui/react";
import React from "react";
import CIcon from "@coreui/icons-react";
import { API } from "../../config";

import MainChartExample from "../../views/charts/ChartBarSimple";
import './Dashboard.css'
const WidgetsDropdown = React.lazy(() =>
  import("../../views/widgets/WidgetsDropdown.js")
);
const WidgetsBrand = React.lazy(() =>
  import("../../views/widgets/WidgetsBrand.js")
);
const Dashboard = () => {
  const [count, setCount] = React.useState(0);
  const reviewList =[
    {id:1,Name:'Mr X',Email:'x@mail.com'},
    {id:2,Name: 'Mr Y',Email:'y@mail.com'}
]
  React.useEffect(() => {
    console.log("dashboard mounted");
  }, [count]);
  return (
    <>
    {/**tab panes */}
     <CTabs activeTab="quick">
     <CNav variant="tabs" className="tab-style">
        <CNavItem>
          <CNavLink data-tab="quick" className="special">
            Quick Look
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink data-tab="search" className="special">
            Search
          </CNavLink>
        </CNavItem>
        </CNav>
        <CTabContent>
        <CTabPane data-tab="quick">
          <WidgetsDropdown/>
         
      
          <CCard>
            <CCardBody>
              <CRow>
                <CCol sm="5">
                  <h4 id="traffic" className="card-title mb-0">
                    Recent (Live feed)
                  </h4>
                  <div className="small text-muted">
                    {new Date().toLocaleDateString()}
                  </div>
                </CCol>
                <CCol sm="7" className="d-none d-md-block">
                  <CButton color="primary" className="float-right">
                    <CIcon name="cil-cloud-download" />
                  </CButton>
                  {/* <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup> */}
                </CCol>
              </CRow>
              <MainChartExample
                style={{ height: "300px", marginTop: "40px" }}
              />
            </CCardBody>
          </CCard>
          </CTabPane>
          <CTabPane data-tab="search">
          <h4 className="table-header mt-3 text-center ">Ratings</h4>
          <CForm className="d-flex custom-form mt-2">
              <CInput
                type="search"
                className="me-2"
                placeholder="Search"
              />
              <CButton type="submit" color="primary" variant="outline">
                Search
              </CButton>
            </CForm>
            <CCard className="mt-2">
            <CCardBody>
            <CDataTable
                        items={reviewList}
                        fields={[
                            { key: '#',_style: { width: '5%' }, _classes: 'font-weight-bold' },
                            'Employee Name','Badge Number','Rating','Feedback','Date'
                        ]}
                        light
                        hover
                        striped
                        bordered
                        sorter
                        columnFilter
                        // clickableRows
                        // onRowClick={(row)=>{
                        //     history.push({
                        //         pathname: '/dashboard/employees/details',
                        //         state: { employee: row }
                        //     })
                        // }}
                        size="sm"
                        itemsPerPage={10}
                        pagination
                      
                        /> 
              </CCardBody>    
            </CCard>
          </CTabPane>
      </CTabContent>
      </CTabs>
    </>
  );
};

export default Dashboard;
