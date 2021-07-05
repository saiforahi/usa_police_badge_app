import React, { useState } from 'react'
import {
  CCardHeader,
  CCardBody,
  CCard,CRow,CCol,CImg
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
      <div id="wrapper" >
        Status: 
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
                </p>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </div>
      </>
    )
}

export default Officer