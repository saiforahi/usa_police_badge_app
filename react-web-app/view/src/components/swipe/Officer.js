import React, { useState } from 'react'
import {
  CCardHeader,
  CCardBody,
  CCard,CRow,CCol,CImg,CContainer,CCardFooter,CButton,CModal,
  CModalHeader,
  CModalBody,CModalFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Rating from '../citizenview/Rating'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {  BASE_URL, PUBLIC_API } from 'src/config';

import { ProgressBar } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import Header from "../header/header";
import Footer from "../footer/Footer";
import { Link, Redirect } from "react-router-dom";
import './Officer.css'
import vCardJS  from 'vcards-js'

const Officer = (data)=>{
  const [user_data,setUserData] = useState({})
  const [showRatingModal,setShowRatingModal] = useState(false)
  
  function generate_and_download_vcard(){
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
  function handle_rating_modal(){
    console.log('setting view')
    setShowRatingModal(true)
  }
  const toggle = ()=>{
    setShowRatingModal(!showRatingModal);
  }
  React.useEffect(()=>{
    PUBLIC_API.get("profile/details/"+data.officer_id+"/").then(async(res)=>{
      console.log(res.data.data)
      setUserData(res.data.data)
    })
  },[])
    return(
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
            <CModal show={showRatingModal} onClose={toggle} centered>
              <CModalHeader closeButton>Modal title</CModalHeader>
              <CModalBody>
                Lorem ipsum dolor...
              </CModalBody>
              <CModalFooter>
                <CButton color="primary">Do Something</CButton>{' '}
                <CButton
                  color="secondary"
                  onClick={toggle}
                >Cancel</CButton>
              </CModalFooter>
            </CModal>
          </CContainer>
        </div> */}
        <div className="content-holder pt-3">
        <Header></Header>
        <section class="main-content container">
          <div className="row">
            <div className="col-lg-6  desktop-gap">
              <h1 className="large-title">
                National Suicide Prevention Lifeline
              </h1>
              <h4 className="small-title">Call Now 1-800-273-TALK (8255)</h4>
              <div>
                <button
                  className="contact-button btn add-margin"
                  onClick={() =>
                    window.open(
                      "https://suicidepreventionlifeline.org/",
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
                src="https://static.wixstatic.com/media/27d832_3bfce60b882b4fd585d46915d6d13bfb~mv2.png/v1/fill/w_596,h_224,al_c,lg_1,q_85/hotline.webp"
                className="img-fluid align-center"
              />
            </div>
          </div>
          {/*VASQUEX GAP*/}
          <div className="row">
            <div className="col-lg-5 desktop-gap2">
              <div className="left-div">
                <img
                  src={BASE_URL+user_data.profile_pic}
                  className="img-fluid mx-auto"
                />
              </div>
            </div>
            <div className="col-lg-7 desktop-gap2">
              <div className="row">
                <div className="col-lg-6 details-view">
                  <h3 className="name-title">{user_data.first_name+' '+user_data.last_name}</h3>
                  <h5 className="creden-number">Position: {user_data.designation}</h5>
                  <h5 className="creden-number">Badge ID: {user_data.badge_number}</h5>
                  <CButton type="button" className="btn btn-success rate-btn">Rate {user_data.first_name}!</CButton>
                  {/* <Link to="/login" className="btn btn-success rate-btn">
                    Rate {user_data.first_name}!
                  </Link> */}
                </div>
                <div className="rating-section col-lg-6">
                  <span className="star-count">5 stars</span>{" "}
                  <ProgressBar
                    variant="warning"
                    now={80}
                    className="height-progress"
                  />
                  <span className="star-count">4 stars</span>{" "}
                  <ProgressBar
                    variant="warning"
                    now={60}
                    className="height-progress"
                  />
                  <span className="star-count">3 stars</span>{" "}
                  <ProgressBar
                    variant="warning"
                    now={50}
                    className="height-progress"
                  />
                  <span className="star-count">2 stars</span>{" "}
                  <ProgressBar
                    variant="warning"
                    now={40}
                    className="height-progress"
                  />
                  <span className="star-count">1 stars</span>{" "}
                  <ProgressBar
                    variant="warning"
                    now={20}
                    className="height-progress"
                  />
                  <h2 className="rating-total mt-1">4.3</h2>
                  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    emptyStarColor={"#6d706e"}
                    starCount={5}
                    value={4}
                  />
                  <h5 class="total-ratings">123 ratings</h5>
                </div>
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
                  <div class="action-buttons">
                    <button type="button" onClick={()=>generate_and_download_vcard()} class="dwnld-business-button btn">
                      Download Business Card
                    </button>
                    <button className="btn btn-outline-success assistance-btn">
                      Victim Rights & Assistance
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*_____THEO GAP_________*/}
          <div className="row flex-column-reverse flex-lg-row">
            {/*_______DETAILS FIRST NOW*/}
            <div class="col-lg-7 desktop-gap2">
              <div class="row">
                <div class="col-lg-6 details-view">
                  <h3 className="name-title">Theo Gibbs</h3>
                  <h5 className="creden-number">Position: CEO</h5>
                  <h5 className="creden-number">Badge ID: #10250</h5>
                  <Link to="/login" className="btn btn-success rate-btn">
                    Rate Theo!
                  </Link>
                </div>
                <div className="rating-section col-lg-6">
                  <span className="star-count">5 stars</span>{" "}
                  <ProgressBar
                    variant="warning"
                    now={80}
                    className="height-progress"
                  />
                  <span className="star-count">4 stars</span>{" "}
                  <ProgressBar
                    variant="warning"
                    now={60}
                    className="height-progress"
                  />
                  <span className="star-count">3 stars</span>{" "}
                  <ProgressBar
                    variant="warning"
                    now={50}
                    className="height-progress"
                  />
                  <span className="star-count">2 stars</span>{" "}
                  <ProgressBar
                    variant="warning"
                    now={40}
                    className="height-progress"
                  />
                  <span className="star-count">1 stars</span>{" "}
                  <ProgressBar
                    variant="warning"
                    now={20}
                    className="height-progress"
                  />
                  <h2 className="rating-total mt-1">4.3</h2>
                  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    emptyStarColor={"#6d706e"}
                    starCount={5}
                    value={4}
                  />
                  <h5 class="total-ratings">123 ratings</h5>
                </div>
                {/**OFFICe details */}
                <div class="col-lg-12">
                  <p class="officer-details">
                    Theo Gibbs; Founder and CEO of Global Accountability Corp.
                    Theo is an inventor of the applied use of NFC technology in
                    order to generate a previously untapped or created market.
                    This work centers around focused engagement that includes
                    the implementation and production of the aforementioned
                    technology.
                  </p>
                  <div class="action-buttons">
                    <button class="dwnld-business-button btn">
                      Download Business Card
                    </button>
                    <button className="btn btn-outline-success assistance-btn">
                      Victim Rights & Assistance
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*____________PICTURE TIME_____________*/}
            <div class="col-lg-5 desktop-gap2">
              <div class="right-div">
                <img
                  src={"assets/images/theo-demowebp.webp"}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
       {/**_____________SPACE FOR BADGE RELEASE COUNTDOWN___________ */}
       <div className="row pb-4">
           <div className="col-lg-12 desktop-gap2">
               <div class="img-div text-center">
                   <img src="assets/images/acountibility-corp.webp" class="img-fluid"></img>
               </div>
               <h3 className="only-head text-center">Less than 60 days from the official release of: <a className="go-to-class" href="https://theaccountabilitybadge.com/">The Accountability Badge</a></h3>
           </div>
       </div>
       {/**_________________SPACE FOR TWITTER FEED___________ */}

       {/**______FOOTER_____ */}
       <Footer></Footer>
        </section>
      </div>
      
      </>
    )
}

export default Officer