import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  CButton,
  CModal,
  CModalHeader,
  CForm,
  CFormText,
  CLabel,
  CInputRadio,
  CModalBody,
  CModalFooter,
  CInput,
  CRow,
  CContainer,
  CCol,
  CLabelBASE_URL,
  CTextarea,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Rating from "../citizenview/Rating";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { BASE_URL, PUBLIC_API } from "src/config";

import { ProgressBar } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import Header from "../header/header";
import Footer from "../footer/Footer";
import { Link, Redirect } from "react-router-dom";
import "./Officer.css";
import vCardJS from "vcards-js";

const Officer = (data) => {
  const [user_data, setUserData] = useState({});
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showDownloadCardModal, setShowDownloadCardModal] = useState(false);

  function generate_and_download_vcard() {
    // let vCard = vCardJS()
    // vCard.firstName = user_data.first_name;
    // vCard.middleName = '';
    // vCard.lastName = user_data.last_name;
    // vCard.organization = 'The Accountability';
    // vCard.photo.attachFromUrl(BASE_URL+user_data.profile_pic, 'JPEG');
    // vCard.workPhone = user_data.phone;
    // vCard.birthday = new Date(1985, 0, 1);
    // vCard.title = user_data.designation;
    // vCard.url = '';
    // vCard.note = '';
    // //save to file
    // vCard.saveToFile('./eric-nesser.vcf');
  }
  function handle_rating_modal() {
    console.log("setting view");
    setShowRatingModal(true);
  }

  function onStarClick(nextValue, prevValue) {
    this.setState({ rating: nextValue });
  }

  // const { rating } = this.state;
  const toggle = () => {
    setShowRatingModal(!showRatingModal);
  };
  const toggle1 = () => {
    setShowDownloadCardModal(!showDownloadCardModal);
  };
  function download_contact() {
    console.log("download card");
    setShowDownloadCardModal(true);
  }
  React.useEffect(() => {
    PUBLIC_API.get("profile/details/" + data.officer_id + "/").then(
      async (res) => {
        console.log(res.data.data);
        setUserData(res.data.data);
      }
    );
  }, []);
  return (
    <>
      {/* <div className="c-app c-default-layout overlay-hero flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol lg="4" sm="8" md="6">
                  <div id="wrapper" >
                    <CCard>
                      <CCardHeader>
                        <h3>Details of Card Owner</h3>
                      </CCardHeader>
                      <CCardBody>
                        <CRow className="justify-content-center mb-3">
                            <CCol>
                                <CImg className="mx-auto rounded-circle" style={{height:"100px",width:"100px"}} shape="rounded" src={BASE_URL+user_data.profile_pic}/>
                            </CCol>
                        </CRow>
                        <CRow>
                          <CCol>
                            <p className="text-left">
                            <strong>Name :</strong> {user_data.first_name + ' '+ user_data.last_name}<br/>
                            <strong>Email :</strong> {user_data.email}<br/>
                            <strong>Phone :</strong> {user_data.phone}<br/>
                            <strong>Registration :</strong> {user_data.registration}<br/>
                            <strong>Address :</strong> {user_data.address}<br/>
                            <strong>Hired :</strong> {user_data.hired!=null?user_data.hired:''}<br/>
                            <strong>Eyes :</strong> {user_data.eyes!=null?user_data.eyes:''}<br/>
                            <strong>Retired :</strong> {user_data.retired!=null?user_data.retired:''}<br/>
                            </p>
                          </CCol>
                        </CRow>
                      </CCardBody>
                      <CCardFooter>
                        <CButton onClick={()=>handle_rating_modal()} className="btn btn-outline-primary" type="button" variant="outline">Rate this officer</CButton>
                      </CCardFooter>
                    </CCard>
                  </div>
                  
                </CCol>
            </CRow>
 </CContainer>
    </div> */}
      {/**_______________MODAL FOR BUSINESS CARD DOWNLOAD__________ */}
      <CModal show={showDownloadCardModal} onClose={toggle1} centered>
        <CModalHeader closeButton>Download Business Card</CModalHeader>
        <CModalBody className="text-style">
          <CContainer>
            <CRow>
              <CCol md="4" sm="12">
                <img
                  src={BASE_URL + user_data.profile_pic}
                  className="avatar-img"
                />
              </CCol>
              <CCol md="8" sm="12">
                <h3>{user_data.first_name + " " + user_data.last_name}</h3>
                <h5>{user_data.designation}</h5>
                <h6>{user_data.status}</h6>
                <h5>{user_data.badge_number}</h5>
              </CCol>
              <CCol md="12 d-flex">
                <h6 className="d-inline-block sub-attr">Hired : 11/12/2012</h6>
                <h6 className="d-inline-block sub-attr">
                  Height : {user_data.height}
                </h6>
                <h6 className="d-inline-block sub-attr">
                  Eyes : {user_data.eyes}
                </h6>
                <h6 className="d-inline-block sub-attr">
                  Hair : {user_data.hair}
                </h6>
                <h6 className="d-inline-block sub-attr">
                  DOB : {new Date(user_data.date_of_birth).toLocaleDateString()}
                </h6>
              </CCol>
              <CCol md="12" className="text-center">
                <h5>Contact Number : {user_data.phone}</h5>
              </CCol>
            </CRow>
          </CContainer>
        </CModalBody>
        <CModalFooter>
          <CButton color="success">Download Business Card</CButton>{" "}
          <CButton color="secondary" onClick={toggle1}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
      {/**_______________MODAL FOR BUSINESS CARD ENDS__________ */}

      <CModal show={showRatingModal} onClose={toggle} centered>
        <CModalHeader closeButton>Rate Officer</CModalHeader>
        <CModalBody>
          <CForm>
            {/**Rating */}
            <div className="mb-3">
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={4}
                // onStarClick={this.onStarClick.bind(this)}
              />
            </div>
            {/**Rating type */}
            <div className="mb-3">
              <CLabel htmlFor="rating-type">Rating Type</CLabel>
              <CSelect custom name="rating-type" id="rating-type">
                <option hidden>Rating Type</option>
                <option value="1">Positive</option>
                <option value="2">Negative</option>
                <option value="3">Neutral</option>
              </CSelect>
              <CFormText id="emailHelp">* Required Field</CFormText>
            </div>

            <div className="mb-3">
              <CLabel htmlFor="userName">FeedBack</CLabel>
              <CTextarea
                type="text"
                id="userFeedBack"
                aria-describedby="feedHelp"
              />

              {/* <CFormText id="feedHelp">
      * Required Field
    </CFormText> */}
            </div>
            <div className="mb-3">
              <CLabel htmlFor="formFileMultiple">Attachment(s)</CLabel>
              <CInput type="file" id="formFileMultiple" multiple />
            </div>
            <hr />
            {/**email */}
            <h5>Reviewer Info</h5>
            <div className="mb-3">
              <CLabel htmlFor="exampleInputEmail1">Email address</CLabel>
              <CInput
                type="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <CFormText id="emailHelp">* Required Field</CFormText>
            </div>
            {/**User name */}
            <div className="mb-3">
              <CLabel htmlFor="userName">Reviewer Name</CLabel>
              <CInput type="text" id="userName" aria-describedby="nameHelp" />
              <CFormText id="nameHelp">* Required Field</CFormText>
            </div>
            {/**phone number */}
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Submit</CButton>{" "}
          <CButton color="secondary" onClick={toggle}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
      {/******MAIN CONTENT STARTS FROM HERE */}
      <div className="content-holder pt-3">
        <Header></Header>
        <section class="main-content container">
          <div className="row">
            <div className="col-lg-6  desktop-gap">
              <h1 className="large-title">New York City Police Department</h1>
              <h4 className="small-title">Call Now 911</h4>
              <div>
                <button
                  className="contact-button btn add-margin"
                  onClick={() =>
                    window.open(
                      "https://www1.nyc.gov/site/nypd/index.page",
                      "_blank"
                    )
                  }
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="col-lg-6 desktop-gap">
              <img
                src="assets/images/police-seating.svg"
                className="img-fluid align-center"
              />
            </div>
          </div>
          {/*VASQUEX GAP*/}
          <div className="row">
            {/** image and pichchi texts -_- */}
            <div className="col-lg-5 desktop-gap2">
              <div className="left-div pt-2">
                <h3 class="position-name"> {user_data.designation}</h3>
                <div class="img-overlay-wrap mt-4">
                  <svg
                    width="380"
                    height="400"
                    viewBox="0 0 403 455"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M224.03 1.668C273.221 -8.72676 320.838 31.416 355.369 67.8782C386.233 100.468 398.84 145.637 402.676 190.307C405.902 227.876 384.181 260.572 375.058 297.164C364.939 337.754 375.358 385.966 346.363 416.178C316.062 447.751 267.799 452.493 224.03 454.53C178.429 456.653 131.746 452.224 93.112 427.965C52.8211 402.667 20.5282 364.081 7.31479 318.455C-5.66145 273.647 -1.75497 222.871 22.0996 182.76C43.9013 146.1 95.9492 144.479 127.726 115.982C165.762 81.871 173.993 12.2415 224.03 1.668Z"
                      fill="#0F1D41"
                    />
                  </svg>
                  <img
                    src={BASE_URL + user_data.profile_pic}
                    className="img-fluid off-image rounded-circle"
                  />
                </div>

                <div class="officer-creden mt-4">
                  <h3 className="name-title">
                    {user_data.first_name + " " + user_data.last_name}
                  </h3>
                  <h5 className="creden-number">
                    Badge ID: {user_data.badge_number}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-7 desktop-gap2">
              <div className="row">
                {/**OFFICe details */}
                <div className="col-lg-12">
                  <p className="officer-details">
                    Santiago is a United States Army Veteran and a Retired
                    Sergeant with the Broward County Sheriff's Office. He holds
                    one of the highest awards for Bravery- The Gold Cross. He
                    brings his Law Enforcement, Military and Nova Southeastern
                    University Executive leadership skills to Global
                    Accountability Corporation. He is also the Broward County
                    Florida Hispanic American Chambers President and the Broward
                    County American Bangladesh Political Affairs Committee
                    President. Santiago was unanimously chosen to be the
                    president of Global Accountability Corporation because of
                    his skills and great personality that brings people
                    together.{" "}
                  </p>

                  <Link className="victims btn">
                    {" "}
                    Victim Rights & Assistance
                  </Link>
                </div>
                {/**Rating stuffs */}
                <div className="col-lg-12 details-view mt-2">
                  {/**RATING DISPLAYY */}
                  <div className="rating-count d-flex">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <h5 className="rating-total mr-2">4.3</h5>
                    {/*  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span></span>}
                    emptyStarColor={"#6d706e"}
                    starCount={5}
                    value={4}
                  /> */}
                    <h5 class="total-ratings">(123 ratings)</h5>
                  </div>
                </div>
                {/**RATING SHOW BAR STYLE !!! */}
                <div className="rating-section col-lg-8">
                  <div class="ind-ratings">
                    <span className="star-count">5 stars</span>{" "}
                    <ProgressBar
                      variant="warning"
                      now={80}
                      className="height-progress"
                    />
                  </div>

                  <div class="ind-ratings">
                    <span className="star-count">4 stars</span>{" "}
                    <ProgressBar
                      variant="warning"
                      now={60}
                      className="height-progress"
                    />
                  </div>

                  <div class="ind-ratings">
                    <span className="star-count">3 stars</span>{" "}
                    <ProgressBar
                      variant="warning"
                      now={50}
                      className="height-progress"
                    />
                  </div>

                  <div class="ind-ratings">
                    {" "}
                    <span className="star-count">2 stars</span>{" "}
                    <ProgressBar
                      variant="warning"
                      now={40}
                      className="height-progress"
                    />
                  </div>

                  <div class="ind-ratings">
                    {" "}
                    <span className="star-count">1 stars</span>{" "}
                    <ProgressBar
                      variant="warning"
                      now={20}
                      className="height-progress"
                    />
                  </div>
                </div>
                {/**actions buttons */}
                <div class="action-buttons mt-5">
                  <button
                    className="btn assistance-btn"
                    onClick={() => handle_rating_modal()}
                  >
                    Rate {user_data.first_name}
                  </button>
                  <button
                    type="button"
                    onClick={() => download_contact()}
                    class="dwnld-business-button btn"
                  >
                    Download Business Card
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*_____THEO GAP_________*/}
          <div className="row">
            {/*_______DETAILS FIRST NOW*/}
             {/****OFFICER PHOTO AND CREDENTIALS */}
             <div className="col-lg-5 desktop-gap2">
              <div className="left-div pt-2">
                <h3 class="position-name">CEO</h3>
                <div class="img-overlay-wrap mt-4">
                  <svg
                    width="380"
                    height="400"
                    viewBox="0 0 403 455"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M224.03 1.668C273.221 -8.72676 320.838 31.416 355.369 67.8782C386.233 100.468 398.84 145.637 402.676 190.307C405.902 227.876 384.181 260.572 375.058 297.164C364.939 337.754 375.358 385.966 346.363 416.178C316.062 447.751 267.799 452.493 224.03 454.53C178.429 456.653 131.746 452.224 93.112 427.965C52.8211 402.667 20.5282 364.081 7.31479 318.455C-5.66145 273.647 -1.75497 222.871 22.0996 182.76C43.9013 146.1 95.9492 144.479 127.726 115.982C165.762 81.871 173.993 12.2415 224.03 1.668Z"
                      fill="#0F1D41"
                    />
                  </svg>
                  <img
                    src={"assets/images/theo-demowebp.webp"}
                    className="img-fluid off-image rounded-circle"
                  />
                </div>

                <div class="officer-creden mt-4">
                  <h3 className="name-title">Theo Gibbs</h3>
                  <h5 className="creden-number">Badge ID: #10250</h5>
                </div>
              </div>
            </div>
            {/***OFFICER DESCRIPTION */}
            <div className="col-lg-7 desktop-gap2">
              <div className="row">
                {/**OFFICe details */}
                <div className="col-lg-12">
                  <p className="officer-details">
                  Theo Gibbs; Founder and CEO of Global Accountability Corp.
                    Theo is an inventor of the applied use of NFC technology in
                    order to generate a previously untapped or created market.
                    This work centers around focused engagement that includes
                    the implementation and production of the aforementioned
                    technology.
                  </p>

                  <Link className="victims btn">
                    {" "}
                    Victim Rights & Assistance
                  </Link>
                </div>
                <div className="col-lg-12 details-view mt-2">
                  {/**RATING DISPLAYY */}
                  <div className="rating-count d-flex">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <h5 className="rating-total mr-2">4.3</h5>
                    {/*  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    renderStarIcon={() => <span></span>}
                    emptyStarColor={"#6d706e"}
                    starCount={5}
                    value={4}
                  /> */}
                    <h5 class="total-ratings">(123 ratings)</h5>
                  </div>
                </div>
                <div className="rating-section col-lg-8">
                  <div class="ind-ratings">
                    <span className="star-count">5 stars</span>{" "}
                    <ProgressBar
                      variant="warning"
                      now={80}
                      className="height-progress"
                    />
                  </div>

                  <div class="ind-ratings">
                    <span className="star-count">4 stars</span>{" "}
                    <ProgressBar
                      variant="warning"
                      now={60}
                      className="height-progress"
                    />
                  </div>

                  <div class="ind-ratings">
                    <span className="star-count">3 stars</span>{" "}
                    <ProgressBar
                      variant="warning"
                      now={50}
                      className="height-progress"
                    />
                  </div>

                  <div class="ind-ratings">
                    {" "}
                    <span className="star-count">2 stars</span>{" "}
                    <ProgressBar
                      variant="warning"
                      now={40}
                      className="height-progress"
                    />
                  </div>

                  <div class="ind-ratings">
                    {" "}
                    <span className="star-count">1 stars</span>{" "}
                    <ProgressBar
                      variant="warning"
                      now={20}
                      className="height-progress"
                    />
                  </div>
                </div>
                <div class="action-buttons mt-5">
                <button className="btn assistance-btn" onClick={() => handle_rating_modal()}>
                      Rate Theo
                    </button>
                  <button
                    class="dwnld-business-button btn"
                    onClick={() => download_contact()}
                  >
                    Download Business Card
                  </button>
                </div>
              </div>
            </div>
         
          </div>
          </section>
          {/*****************SPACE FOR OFFICERS BANNERS______coz why not -_-* */}
<section className="banners">
<div class="container">
<div className="row">
  <div className="col-lg-5">
<h1 class="thin-head">Your</h1>
<h1 class="fat-head">Banners</h1>
  </div>
  <div className="col-lg-7">
    <div className="row justify-content-between">
      <div className="col-lg-6">
        <Link  onClick={() =>
                    window.open(
                      "https://www1.nyc.gov/site/nypd/index.page",
                      "_blank"
                    )}><img src={"assets/images/dumm1ban1.svg"} className="img-fluid" /></Link>
      </div>
      <div className="col-lg-6">
      <Link><img src={"assets/images/dum2ban2.svg"} className="img-fluid"/></Link>
      </div>
      <div className="col-lg-6">
       <Link><img src={"assets/images/dum3ban3.svg"} className="img-fluid"/></Link>
      </div>
      <div className="col-lg-6">
       <Link><img src={"assets/images/dum4ban4.svg"} className="img-fluid"/></Link>
      </div>
    </div>
  </div>
</div>
</div>
</section>
          {/**_____________SPACE FOR BADGE RELEASE COUNTDOWN___________ */}
          <div className="row pb-4">
            <div className="col-lg-12 desktop-gap2">
              <div class="img-div text-center">
                <img
                  src="assets/images/acountibility-corp.webp"
                  class="img-fluid"
                ></img>
              </div>
              <h3 className="only-head text-center">
                Less than 60 days from the official release of:{" "}
                <a
                  className="go-to-class"
                  href="https://theaccountabilitybadge.com/"
                >
                  The Accountability Badge
                </a>
              </h3>
            </div>
          </div>




          {/**_________________SPACE FOR TWITTER FEED___________ */}

          {/**______FOOTER_____ */}
          <section className="container">
          <Footer></Footer>
          </section>
      
      </div>
    </>
  );
};

export default Officer;
