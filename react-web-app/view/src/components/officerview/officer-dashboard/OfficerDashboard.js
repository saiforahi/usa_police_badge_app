import {
    CCol,
    CRow,
    CWidgetDropdown,
    CCardBody,
    CCard,
    CButton,
    CBadge,
    CImg, CContainer
} from "@coreui/react";
import StarRatingComponent from "react-star-rating-component";
import React from "react";
import CIcon from "@coreui/icons-react";
import { fetchDashboardData } from "src/store/slices/DashboardSlice";
import MainChartExample from "../../../views/charts/ChartBarSimple";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotificationsThunk } from "src/store/slices/NotificationSlice";
import { fetchRatingsThunk } from "src/store/slices/RatingSlice";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "src/config";
const WidgetsDropdown = React.lazy(() =>
    import("../../../views/widgets/WidgetsDropdown.js")
);

const Dashboard = () => {
    let history = useHistory()
    const data = useSelector(state => state.dashboard);
    const officer_notifications = useSelector(state => {
        let data = []
        let user_id = localStorage.getItem('user_id')
        Array.from(state.notifications.data).forEach((item, index) => {
            if (item.nfc.user.id == user_id) {
                data.push(item)
            }
        })
        return data
    })
    const notifications = useSelector(state => state.notifications)
    const ratings = useSelector(state => {
        let data = []
        Array.from(state.ratings.data).forEach((item, index) => {
            if (item.review_type == 1 && item.officer.id == localStorage.getItem('user_id')) {
                data.push(item)
            }
        })
        return data
    })
    const negativeRatings = useSelector(state => {
        let data = []
        Array.from(state.ratings.data).forEach((item, index) => {
            if (item.review_type == 2 && item.officer.id == localStorage.getItem('user_id')) {
                data.push(item)
            }
        })
        return data
    })
    const ratingsTableData = useSelector(state => {
        let data = []
        state.ratings.data.forEach((rate, index) => {
            if(rate.officer.id == localStorage.getItem('user_id')){
                data.push({ '#': index + 1, 'Employee Name': rate.officer.first_name + ' ' + rate.officer.last_name, 'Badge Number': rate.officer.user_id[0].nfc_number, 'Rating': Number(rate.star), 'Feedback': rate.comment, 'Date': new Date(rate.created_at).toLocaleDateString() + ' ' + new Date(rate.created_at).toLocaleTimeString() })
            }
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
            <CContainer>
                <CRow>
                    <CCol>
                        <CButton color="primary" type="button">Clock In</CButton>
                    </CCol>
                </CRow>
                <hr />
                <CRow className="mt-3">
                    <CCol sm="6" lg="3">
                        <CWidgetDropdown className="pb-4"
                            color="gradient-primary"
                            header={String(officer_notifications.length)}
                            text="Total Scans"
                        >
                        </CWidgetDropdown>
                    </CCol>
                </CRow>
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
                                                <p className="time"><CIcon name="cil-clock" />{" "}<CIcon icon="cil-clock" /><span>{new Date(rating.created_at).toLocaleTimeString() + ' - ' + new Date(rating.created_at).toLocaleDateString()}</span></p>
                                                <p className="person-name"> <CImg
                                                    src={BASE_URL + rating.officer.profile_pic}
                                                    className="c-avatar-img officer-img mr-1 ml-0"
                                                    alt=''
                                                />{rating.officer.first_name} <span class="officer-designation">{rating.officer.designation}</span></p>
                                                <StarRatingComponent
                                                    name="rate2"
                                                    editing={false}
                                                    emptyStarColor={"#6d706e"}
                                                    starCount={5}
                                                    value={Number(rating.star)}
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
                                                <p className="time"><CIcon name="cil-clock" />{" "}<span>{new Date(rating.created_at).toLocaleTimeString() + ' - ' + new Date(rating.created_at).toLocaleDateString()}</span></p>
                                                <p className="person-name"> <CImg
                                                    src={BASE_URL + rating.officer.profile_pic}
                                                    className="c-avatar-img officer-img mr-1 ml-0"
                                                    alt=''
                                                />{rating.officer.first_name} <span class="officer-designation">{rating.officer.designation}</span></p>
                                                {/* <p class="feedback"></p> */}
                                                <StarRatingComponent
                                                    name="rate2"
                                                    editing={false}
                                                    emptyStarColor={"#6d706e"}
                                                    starCount={5}
                                                    value={Number(rating.star)}
                                                />
                                                <p class="review mt-none">by {rating.name} </p>
                                                <p className="review-text">{'"' + rating.comment + '"'}</p>
                                                {/* <p><button className="btn-danger btn">Take Action !</button></p> */}
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
                                    <CButton color="primary" type="button" className="angle-right" onClick={() => history.push('/dashboard/scan-history')}>
                                        {notifications.status == 'succeeded' ? 'Total' : 'loading'} <CBadge color="info">{officer_notifications.length}</CBadge>
                                        <span className="visually-hidden">unread messages</span>
                                    </CButton>
                                </div>
                                <div class="card-div mt-2 pb-1 pr-3">
                                    {officer_notifications != undefined && Array.from(officer_notifications.slice(0, 10)).map((notification) => (
                                        <CCard className="show-scans">
                                            <CCardBody>
                                                <CRow>
                                                    <CCol sm="2">
                                                        <CImg
                                                            src={BASE_URL + notification.nfc.user.profile_pic}
                                                            className="c-avatar-img officer-img mr-1 ml-0"
                                                            alt=''
                                                        />
                                                    </CCol>
                                                    <CCol sm="10">
                                                        <p>Badge No: {notification.nfc.nfc_number} of {notification.nfc.user.first_name + ' ' + notification.nfc.user.last_name} was scanned at {new Date(notification.created_at).toLocaleTimeString()} on {new Date(notification.created_at).toLocaleDateString()}
                                                        </p>
                                                    </CCol>
                                                </CRow>

                                                {/* <p>
                                <CIcon name="cil-clock" />{" "}
                                <span> A moment ago </span>
                              </p> */}
                                            </CCardBody>
                                        </CCard>
                                    ))}
                                    <CButton onClick={() => history.push('/dashboard/scan-history')} className="ml-2" type="button" variant="outline" color="primary">View all</CButton>
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
            </CContainer>
        </>
    );
};

export default Dashboard;
