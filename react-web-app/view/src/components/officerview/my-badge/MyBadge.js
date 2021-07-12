import React from "react";
import swal from "sweetalert";
import {
  CContainer,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabs,
  CNav,
  CTabPane,
  CCard,
  CRow,
  CCol,
  CCardBody,
  CLabel,
  CFormText,
  CInputCheckbox,
  CInputRadio,
  CSwitch,
  CInputFile,
  CSelect,
  CCardFooter,
  CCardHeader,
  CForm,
  CTextarea,
  CInputGroupText,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CButton,
  CImg,
  CFormGroup,
  CFormCheck
} from "@coreui/react";

const MyBadge = () => {
  // React.useEffect(()=>{
  //     swal('Sorry!','This service is under development','warning')
  // },[])
  return (
    <>
      <h3 className="d-inline">Details to display</h3>
      <CButton className="float-right" color="primary" type="button">
        Preview Scan
      </CButton>
      <hr />
      <CRow>
        <div>
          <CCard>
            <CCardBody>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" checked/>
                <label className="form-check-label" for="exampleCheck1">Memorial</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" checked/>
                <label className="form-check-label" for="exampleCheck1">Bio</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" checked/>
                <label className="form-check-label" for="exampleCheck1">My VCard download</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Contact (from contacts)</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Other optional features if added by the user</label>
            </div>
            </CCardBody>
          </CCard>
        </div>
      </CRow>
      <h3 className="d-inline">Managed by company</h3>
      <hr />
      <CRow>
        <div>
          <CCard>
            <CCardBody>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" checked disabled/>
                <label className="form-check-label" for="exampleCheck1">Fisrt Name, Last Name</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" checked disabled/>
                <label className="form-check-label" for="exampleCheck1">Corporate contact</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" checked disabled/>
                <label className="form-check-label" for="exampleCheck1">Badge Number</label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" checked disabled/>
                <label className="form-check-label" for="exampleCheck1">Other optional features if added by the admin</label>
            </div>
            </CCardBody>
          </CCard>
        </div>
      </CRow>
    </>
  );
};

export default MyBadge;
