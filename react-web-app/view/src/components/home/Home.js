import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  CButton,
  CModal,
  CModalHeader,
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
import { Link, Redirect } from "react-router-dom";
import { TOKEN } from "../../config";
import "./Home.css";
import Header from "../header/header";
import Footer from "../footer/Footer";
import StarRatingComponent from "react-star-rating-component";
import ReactDOM from "react-dom";
import { ProgressBar } from "react-bootstrap";

// import { from } from 'core-js/core/array'
const isLoggedIn = () => {
  if (localStorage.getItem(TOKEN) === null) {
    return false;
  }
  return true;
};

const Home = () => {
  const [showDownloadCardModal, setShowDownloadCardModal] = useState(false);
  const toggle1 = () => {
    setShowDownloadCardModal(!showDownloadCardModal);
  };
  function download_contact() {
    console.log("download card");
    setShowDownloadCardModal(true);
  }
  // let history=useHistory()
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("home mounted");
  }, [count]);
  return (
    <>
      {/**_______________MODAL FOR BUSINESS CARD DOWNLOAD__________ */}
      <CModal show={showDownloadCardModal} onClose={toggle1} centered>
        <CModalHeader closeButton>Download Business Card</CModalHeader>
        <CModalBody className="text-style">
          <CContainer>
            <CRow>
              <CCol md="4" sm="12">
                <img
                  src={"assets/images/Santiago Vaquez_PNG.webp"}
                  className="avatar-img"
                />
              </CCol>
              <CCol md="8" sm="12">
                <h3>Santiago Vasquez,JR</h3>
                <h5>Sergeant-DL</h5>
                <h6>Retired on 23/06/2021</h6>
                <h5>CCN:10388</h5>
              </CCol>
              <CCol md="12 d-flex">
                <h6 className="d-inline-block sub-attr">Hired : 11/12/2012</h6>
                <h6 className="d-inline-block sub-attr">Height : 5'9''</h6>
                <h6 className="d-inline-block sub-attr">Eyes : Hazel</h6>
                <h6 className="d-inline-block sub-attr">Hair : Brown</h6>
                <h6 className="d-inline-block sub-attr">DOB : 19/06/1984</h6>
              </CCol>
              <CCol md="12" className="text-center">
                <h5>Contact Number : +1289354759349</h5>
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

      <div className="content-holder">
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
                src={"assets/images/police-seating.svg"}
                className="img-fluid align-center"
              />
            </div>
          </div>
          {/*VASQUEX GAP*/}
          <div className="row">
            {/****OFFICER PHOTO AND CREDENTIALS */}
            <div className="col-lg-5 desktop-gap2">
              <div className="left-div pt-2">
                <h3 class="position-name">Sergeant</h3>
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
                    src={"assets/images/Santiago Vaquez_PNG.webp"}
                    className="img-fluid off-image rounded-circle"
                  />
                </div>

                <div class="officer-creden mt-4">
                  <h3 className="name-title">Santiago Vazquez</h3>
                  <h5 className="creden-number">Badge ID: #10389</h5>
                </div>
              </div>
            </div>
            {/***OFFICER DESCRIPTION */}
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
                <button className="btn assistance-btn">
                      Rate Santiago
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
                <button className="btn assistance-btn">
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
          <Footer></Footer>
        </section>
      </div>
    </>
  );
};
export default Home;
