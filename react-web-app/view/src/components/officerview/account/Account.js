import React,{useState,useRef} from 'react'
import { CContainer,CCard, CRow,CCol,CCardBody,CCardFooter,CCardHeader,CForm,CTextarea,CInputGroupText,CInput,CInputGroup,CInputGroupPrepend,CButton,CImg } from '@coreui/react'
import { useSelector } from 'react-redux'
import { BASE_URL } from 'src/config'
const Account = ()=>{
    const data = useSelector(state => state.user.data)
    const [avatar,setAvatar] = useState()
    const [image,setImage]=useState()
    const inputFile = useRef(null) 
    function onImageChange(file){
        setImage(file)
        setAvatar(URL.createObjectURL(file))
        //update_profile()
    }
    const onButtonClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
    };
    
    return(
        <>
        <CContainer>
        <CRow className="justify-content-center">
            <CCol md="8">
                <CCard>
                    <CCardHeader>
                        <h3>Details</h3>
                    </CCardHeader>
                    <CCardBody>
                            <CRow className="justify-content-center">
                                <CImg onClick={onButtonClick} className="mx-auto" style={{height:"100px",width:"116px",cursor:"pointer"}} shape="rounded" src={BASE_URL+data.profile_pic} />
                            </CRow>
                            <hr/>
                            <CRow className="justify-content-center">
                                <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={(event)=>onImageChange(event.target.files[0])}/>
                                {/* <CButton type="button" onClick={onButtonClick}>change</CButton> */}
                            </CRow>
                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    First Name
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput value={1} onChange={(event)=>{}} type="text" placeholder="First Name" autoComplete="first_name" />
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    Last Name
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput value={1} onChange={(event)=>{}} type="text" placeholder="Last Name" autoComplete="last_name" />
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    Email
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput value={1} onChange={(event)=>{}} type="email" placeholder="Email" autoComplete="email" />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    Phone
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="Phone" value={1} onChange={(event)=>{}}  />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    Registration
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="mac" autoComplete="mac" value={1} onChange={(event)=>{}}  />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    Address
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CTextarea type="text" placeholder="Phone" value={1} onChange={(event)=>{}} />
                            </CInputGroup>
                            {/* <CRow>
                                <CCol xs="12" md="12">
                                    
                                </CCol>
                            </CRow> */}
                    </CCardBody>
                    <CCardFooter>
                        <CButton color="primary" className="px-4" type="button" onClick={()=>{}}>Update</CButton>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
        </CContainer>
        </>
    )
}

export default Account