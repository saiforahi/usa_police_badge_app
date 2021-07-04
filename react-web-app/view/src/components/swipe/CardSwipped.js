import React, { useState,Component } from 'react'
import {
  CCardHeader,
  CCardBody,
  CCard,CRow,CCol,CImg,CInputGroup,CInputGroupPrepend,CInputGroupText,CLabel,CFormGroup,CValidFeedback,CInput,CForm,CInputGroupAppend
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import GoogleMapReact from 'google-map-react'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {  BASE_URL, PUBLIC_API } from 'src/config';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function renderMarkers(map, maps,lat,lng) {
  const myLatLng = { lat: lat, lng: lng }
  console.log('setting lat lng -- ',myLatLng)
  new maps.Marker({
    position: myLatLng,
    map,
    title: 'Hello World!'
  });
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const MapWithAMarker = withScriptjs(withGoogleMap(() =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     <Marker
//       position={{ lat: -34.397, lng: 150.644 }}
//     />
//   </GoogleMap>
// ));
const CardSwipped = (data)=>{
  const [user_data,setUserData] = useState({})
  const [lat_lng,setLatLng]=useState([])
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
  React.useEffect(()=>{
    console.log('props data --- ',data.data)
      PUBLIC_API.get("profile/details/"+data.data.user_id+"/").then(async(res)=>{
        console.log('lat from res --- ',res.data.data)
        setUserData(res.data.data)
        setLatLng([Number(res.data.data.lat),Number(res.data.data.lng)])
      })
  },[])
    return(
      <>
      <div>
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
            <CRow className="justify-content-left">
              <CForm className="form-horizontal">
                <CFormGroup>
                  <div className="controls">
                    <CInputGroup className="input-prepend">
                      <CInputGroupPrepend>
                        <CInputGroupText>Name</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput value={user_data.first_name+' '+user_data.last_name} id="prependedInput" size="16" type="text" readOnly style={{background:'white',border:'none'}}/>
                    </CInputGroup>
                  </div>
                </CFormGroup>
                <CFormGroup>
                  <div className="controls">
                    <CInputGroup className="input-prepend">
                      <CInputGroupPrepend>
                        <CInputGroupText>Email</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput value={user_data.email} id="prependedInput" size="16" type="text" readOnly style={{background:'white',border:'none'}}/>
                    </CInputGroup>
                  </div>
                </CFormGroup>
                <CFormGroup>
                  <div className="controls">
                    <CInputGroup className="input-prepend">
                      <CInputGroupPrepend>
                        <CInputGroupText>Phone</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput value={user_data.phone} id="prependedInput" size="16" type="text" readOnly style={{background:'white',border:'none'}}/>
                    </CInputGroup>
                  </div>
                </CFormGroup>
              </CForm>
            </CRow>
            <CRow>
              <div style={{ height: '250px', width: '100%' }}>
                <div className="mb-2">Lat : {user_data.lat} & Lng: {user_data.lng} </div>
                {/* <MapWithAMarker
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                >
                  <Marker position={{ lat: -34.397, lng: 150.644 }} />
                </MapWithAMarker> */}
                <GoogleMapReact
                    bootstrapURLKeys={{key:'AIzaSyCbynC4V9qRGyQTR5-ssW8qb0yX4oNNnKc'}}
                    defaultCenter={{lat:22.019,lng:92.092}}
                    defaultZoom={11}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                  <AnyReactComponent lat={23.012} lng={93.022}/>
                </GoogleMapReact>
                
              </div>
              
            </CRow>
          </CCardBody>
        </CCard>
      </div>
      </>
    )
}

export default CardSwipped