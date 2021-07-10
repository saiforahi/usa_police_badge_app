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
  CBadge,
  CDataTable,
  CImg
} from "@coreui/react";
import StarRatingComponent from "react-star-rating-component";
import React from "react";
import CIcon from "@coreui/icons-react";
import { fetchDashboardData } from "src/store/slices/DashboardSlice";
import MainChartExample from "../../views/charts/ChartBarSimple";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotificationsThunk } from "src/store/slices/NotificationSlice";
import { fetchRatingsThunk } from "src/store/slices/RatingSlice";
const WidgetsDropdown = React.lazy(() =>
  import("../../views/widgets/WidgetsDropdown.js")
);

const Dashboard = () => {
  const data = useSelector(state => state.dashboard);
  const notifications = useSelector(state => state.notifications)
  const ratings = useSelector(state => {
    let data = []
    Array.from(state.ratings.data).forEach((item,index)=>{
      if(item.review_type == 1){
        data.push(item)
      }
    })
    return data
  })
  const negativeRatings = useSelector(state => {
    let data = []
    Array.from(state.ratings.data).forEach((item,index)=>{
      if(item.review_type == 2){
        data.push(item)
      }
    })
    return data
  })
  const ratingsTableData = useSelector(state => {
    let data = []
    state.ratings.data.forEach((rate, index) => {
      data.push({ '#': index + 1, 'Employee Name': rate.officer.first_name + ' ' + rate.officer.last_name, 'Badge Number': rate.officer.user_id[0].nfc_number, 'Rating': Number(rate.star), 'Feedback': rate.comment, 'Date': new Date(rate.created_at).toLocaleDateString()+' '+new Date(rate.created_at).toLocaleTimeString() })
    })
    return data
  })
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
              <CCol sm="12" md="4" lg="4">
                <h4 id="traffic" className="card-title mb-0">Recent Ratings (Live Feed)</h4>
                <div class="rating-holder mt-4">
                  <CRow>
                    {ratings != undefined && Array.from(ratings.slice(0, 9)).map((rating) => (
                      <CCol xs="12" sm="6" md="12" lg="10">
                        <CCard className="review-cards">
                          <CCardBody>
                            <p className="time"><CIcon name="cil-clock" />{" "}<span> A moment ago </span></p>
                            <p className="person-name"> <CImg
                              src={'assets/images/avatar.png'}
                              className="c-avatar-img officer-img mr-1 ml-0"
                              alt=''
                            />{rating.officer.first_name},<span class="officer-designation">Sergant</span></p>
                            {/* <p class="feedback"></p> */}
                            <StarRatingComponent
                              name="rate2"
                              editing={false}
                              emptyStarColor={"#6d706e"}
                              starCount={5}
                              value={3.5}
                            />
                            <p class="review mt-none">by {rating.name} </p>
                            <p className="review-text">{'"' + rating.comment + '"'}</p>
                          </CCardBody>
                        </CCard>
                      </CCol>
                    ))}
                  </CRow>
                </div>
              </CCol>
              {/**___NEGATIVE REVIEW SHOW */}
              <CCol sm="12" md="4" lg="4">

                <h4 id="traffic" className="card-title negative-heading mb-0">Negative Ratings (Live Feed)</h4>
                <div class="rating-holder negative mt-4">
                  <CRow>
                    {negativeRatings != undefined && Array.from(negativeRatings.slice(0, 9)).map((rating) => (
                      <CCol xs="12" sm="6" md="12" lg="10">
                        <CCard className="review-cards border-danger">
                          <CCardBody>
                            <p className="time"><CIcon name="cil-clock" />{" "}<span> A moment ago </span></p>
                            <p className="person-name"> <CImg
                              src={'assets/images/avatar.png'}
                              className="c-avatar-img officer-img mr-1 ml-0"
                              alt=''
                            />{rating.officer.first_name},<span class="officer-designation">Sergant</span></p>
                            {/* <p class="feedback"></p> */}
                            <StarRatingComponent
                              name="rate2"
                              editing={false}
                              emptyStarColor={"#6d706e"}
                              starCount={5}
                              value={2}
                            />
                            <p class="review mt-none">by {rating.name} </p>
                            <p className="review-text">{'"' + rating.comment + '"'}</p>
                            <p><button className="btn-danger btn">Take Action !</button></p>
                          </CCardBody>
                        </CCard>
                      </CCol>
                    ))}
                  </CRow>
                </div>

              </CCol>
              {/**latest scans show */}
              <CCol sm="12" md="4" lg="4">
                <CCard className="noti-holder">
                  <CCardBody>
                    <div class="scan-header">
                      <h5 className="angle-left">Recent Scans</h5>
                      <CButton color="primary" className="angle-right">
                        {notifications.status == 'succeeded' ? 'Total' : 'loading'} <CBadge color="info">{notifications.data.length}</CBadge>
                        <span className="visually-hidden">unread messages</span>
                      </CButton>
                    </div>
                    <div class="card-div mt-2 pb-1 pr-3">
                      {notifications != undefined && Array.from(notifications.data.slice(0, 10)).map((notification) => (
                        <CCard className="show-scans">
                          <CCardBody>

                            <p>
                              <CImg
                                src={'assets/images/avatar.png'}
                                className="c-avatar-img officer-img mr-1 ml-0"
                                alt=''
                              />
                              Badge No: {notification.nfc.nfc_number} of {notification.nfc.user.first_name + ' ' + notification.nfc.user.last_name} was
                              scanned near Broward
                            </p>
                            {/* <p>
                              <CIcon name="cil-clock" />{" "}
                              <span> A moment ago </span>
                            </p> */}
                          </CCardBody>
                        </CCard>
                      ))}
                      <CButton className="ml-2" type="button" variant="outline" color="primary">View all</CButton>
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
                  items={ratingsTableData}
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
