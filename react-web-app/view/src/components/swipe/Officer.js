import React, { useState } from 'react'
import {
  CCardHeader,
  CCardBody,
  CCard,CRow,CCol,CImg,CContainer,CCardFooter,CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {  BASE_URL, PUBLIC_API } from 'src/config';

const Officer = (data)=>{
  const [user_data,setUserData] = useState({})
  
  React.useEffect(()=>{
    console.log('props data --- ',data.data)
    PUBLIC_API.get("profile/details/"+data.officer_id+"/").then(async(res)=>{
      console.log('lat from res --- ',res.data.data)
      setUserData(res.data.data)
    })
  },[])
    return(
      <>
      <div className="c-app c-default-layout overlay-hero flex-row align-items-center">
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
                        <CButton className="btn btn-outline-primary" type="button" variant="outlined">Rate this officer</CButton>
                      </CCardFooter>
                    </CCard>
                  </div>
                  
                </CCol>
            </CRow>
          </CContainer>
        </div>
      
      </>
    )
}

export default Officer