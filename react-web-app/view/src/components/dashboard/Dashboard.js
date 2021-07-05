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
  CDataTable,
} from "@coreui/react";
import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import { API, PUBLIC_API } from "../../config";

import MainChartExample from "../../views/charts/ChartBarSimple";
import "./Dashboard.css";
const WidgetsDropdown = React.lazy(() =>
  import("../../views/widgets/WidgetsDropdown.js")
);
const WidgetsBrand = React.lazy(() =>
  import("../../views/widgets/WidgetsBrand.js")
);
const Dashboard = () => {
  const [count, setCount] = React.useState(0);
  const [data, setData] = useState({});
  const reviewList = [
    { id: 1, Name: "Mr X", Email: "x@mail.com" },
    { id: 2, Name: "Mr Y", Email: "y@mail.com" },
  ];
  React.useEffect(() => {
    console.log("dashboard mounted");
    PUBLIC_API.get("dashboard/info/").then((res) => {
      console.log(res.data);
      setData(res.data.data);
    });
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
            <WidgetsDropdown data={data} />
            <CRow>
              {/**show ratings */}
              <CCol sm="12" md="7" lg="8">
              <h4 id="traffic" className="card-title mb-0">
                         Recent Ratings (Live Feed)
                        </h4>
                      
                        <div class="rating-holder mt-4">
                        <CRow>
                          <CCol sm="12" md="6" lg="4">
                        <CCard className="review-cards">
                        <CCardBody>
                        <p className="time">
                            <CIcon name="cil-clock" />{" "}
                            <span> A moment ago </span>
                          </p>
                          <p className="person-name">Tim Miller</p>
                         
                          <p class="feedback">
                          <p class="review">4 stars for Santiago Vasquez</p>
                         <p className="review-text"> Santiago was great ! </p>
                          </p>
                         
                        </CCardBody>
                      </CCard>
                      </CCol>
                      </CRow>
                        </div>
                       
              </CCol>

              {/**latest scans show */}
              <CCol sm="12" md="5" lg="4">
                <CCard className="noti-holder">
                  <CCardBody>
                    <div class="scan-header">
                      <h5 className="angle-left">Recent Scans</h5>
                      <CButton color="primary" className="angle-right">
                        New <CBadge color="info">9</CBadge>
                        <span className="visually-hidden">unread messages</span>
                      </CButton>
                    </div>
                    <div class="card-div mt-2 pb-1 pr-3">
                      <CCard className="show-scans">
                        <CCardBody>
                          <p>
                            Badge No: CCN 10389 of Sergant Santiago Vasquez was
                            scanned near Broward
                          </p>
                          <p>
                            <CIcon name="cil-clock" />{" "}
                            <span> A moment ago </span>
                          </p>
                        </CCardBody>
                      </CCard>
                      <CCard className="show-scans grey-border">
                        <CCardBody>
                          <p>
                            Badge No: CCN 10389 of Sergant Santiago Vasquez was
                            scanned near Broward
                          </p>
                          <p>
                            <CIcon name="cil-clock" />{" "}
                            <span> A moment ago </span>
                          </p>
                        </CCardBody>
                      </CCard>
                      <CCard className="show-scans grey-border">
                        <CCardBody>
                          <p>
                            Badge No: CCN 10389 of Sergant Santiago Vasquez was
                            scanned near Broward
                          </p>
                          <p>
                            <CIcon name="cil-clock" />{" "}
                            <span> A moment ago </span>
                          </p>
                        </CCardBody>
                      </CCard>
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            <CRow>
            <CCol sm="12" md="7" lg="8">
                <CCard>
                  <CCardBody>
                    <CRow>
                      <CCol sm="5">
                        <h4 id="traffic" className="card-title mb-0">
                          Ratings
                        </h4>
                        <div className="small text-muted">
                          {new Date().toLocaleDateString()}
                        </div>
                      </CCol>
                      <CCol sm="7" className="d-none d-md-block">
                        <CButton color="primary" className="float-right">
                          <CIcon name="cil-cloud-download" />
                        </CButton>
                      </CCol>
                    </CRow>

                    <MainChartExample
                      style={{ height: "300px", marginTop: "40px" }}
                    />
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CTabPane>
          <CTabPane data-tab="search">
            <h4 className="table-header mt-3 text-center ">Ratings</h4>
            <CForm className="d-flex custom-form mt-2">
              <CInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="primary" variant="outline">
                Search
              </CButton>
            </CForm>
            <CCard className="mt-2">
              <CCardBody>
                <CDataTable
                  items={reviewList}
                  fields={[
                    {
                      key: "#",
                      _style: { width: "5%" },
                      _classes: "font-weight-bold",
                    },
                    "Employee Name",
                    "Badge Number",
                    "Rating",
                    "Feedback",
                    "Date",
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
