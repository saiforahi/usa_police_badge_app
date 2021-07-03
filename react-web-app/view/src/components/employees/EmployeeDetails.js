import React,{useState,useRef} from 'react'
import { CCard, CRow,CCol,CCardBody,CCardFooter,CCardHeader,CForm,CInputGroupAppend,CInputGroupText,CInput,CInputGroup,CInputGroupPrepend,CButton,CImg } from '@coreui/react'
import { useHistory, useLocation } from 'react-router-dom'
import CIcon from "@coreui/icons-react"
const EmployeeDetails =()=>{
    let location = useLocation()
    let history = useHistory()
    const inputFile = useRef(null) 
    const [avatar,setAvatar] = useState()
    const checkProp =()=>{
        console.log(location.state)
        if(location.state.employee == undefined){
            history.push('/dashboard/employees')
        }
    }
    const onButtonClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
    };
    return(
        <>
        {location.state ? 
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <h3>Details of <strong>{location.state.employee.Name}</strong></h3>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CRow className="justify-content-center">
                                <CCol className="justify-content-center" md="2">
                                    <CImg className="mx-auto" style={{height:"100px"}} shape="rounded" src={'assets/images/avatar.png'}/>
                                </CCol>
                            </CRow>
                            <CRow className="justify-content-center">
                                <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
                                <CButton type="button" onClick={onButtonClick}>change</CButton>
                            </CRow>
                            {/* <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    <CIcon name="cil-user" />
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="email" placeholder="Email" autoComplete="email" />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    <CIcon name="cil-lock-locked" />
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="password" placeholder="Password" autoComplete="current-password"  />
                            </CInputGroup> */}
                            {/* <CRow>
                                <CCol xs="12" md="12">
                                    
                                </CCol>
                            </CRow> */}
                        </CForm>
                    </CCardBody>
                    <CCardFooter>
                        <CButton color="primary" className="px-4">Update</CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>:history.push('/dashboard/employees')}
        </>
    )
}

export default EmployeeDetails