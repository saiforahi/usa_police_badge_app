import {
  CCol,
  CRow,
  CTabs,
  CNav,
  CNavLink,
  CNavItem,
  CTabContent,
  CTabPane,
  CInput,
  CCardBody,
  CForm,
  CCard,
  CButton,
  CButtonGroup,
  CBadge,
  CDataTable,
} from "@coreui/react";
import React from "react";
import CIcon from "@coreui/icons-react";
import { fetchDashboardData } from "src/store/slices/DashboardSlice";
import MainChartExample from "../../views/charts/ChartBarSimple";
import "./Dashboard.css";
import { useDispatch,useSelector } from "react-redux";
import { fetchNotificationsThunk } from "src/store/slices/NotificationSlice";
import { fetchRatingsThunk } from "src/store/slices/RatingSlice";
const WidgetsDropdown = React.lazy(() =>
  import("../../views/widgets/WidgetsDropdown.js")
);

const Dashboard = () => {
  const data = useSelector(state => state.dashboard);
  const notifications = useSelector(state => state.notifications.data.slice(0,10))
  const ratings = useSelector(state => state.ratings.data)
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(fetchDashboardData())
    dispatch(fetchNotificationsThunk())
    dispatch(fetchRatingsThunk())
  }, []);
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
            <WidgetsDropdown data={data.data} />
            <CRow>
              {/**show ratings */}
              <CCol sm="12" md="7" lg="8">
                <h4 id="traffic" className="card-title mb-0">Recent Ratings (Live Feed)</h4>   
                <div class="rating-holder mt-4">
                  <CRow>
                    {ratings!=undefined && Array.from(ratings.slice(0,10)).map((rating)=>(
                      <CCol sm="12" md="6" lg="4">
                        <CCard className="review-cards">
                          <CCardBody>
                            <p className="time"><CIcon name="cil-clock" />{" "}<span> A moment ago </span></p>
                            <p className="person-name">{rating.officer.first_name}</p>
                            <p class="feedback"></p>
                            <p class="review">4 stars by {rating.name}</p>
                            <p className="review-text">{'"'+rating.comment+'"'}</p>
                          </CCardBody>
                        </CCard>
                      </CCol>
                    ))}
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
                      {notifications!= undefined && Array.from(notifications).map((notification)=>(
                        <CCard className="show-scans">
                          <CCardBody>
                            <p>
                              Badge No: {notification.nfc.nfc_number} of {notification.nfc.user.first_name+' '+notification.nfc.user.last_name} was
                              scanned near Broward
                            </p>
                            {/* <p>
                              <CIcon name="cil-clock" />{" "}
                              <span> A moment ago </span>
                            </p> */}
                          </CCardBody>
                        </CCard>
                      ))}
                    </div>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            <CRow>
            <CCol sm="12" md="12" lg="12">
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
                  items={ratings}
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
