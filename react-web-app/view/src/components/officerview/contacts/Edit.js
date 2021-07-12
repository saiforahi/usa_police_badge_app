import { CContainer,CSelect,CLabel,CForm,CValidFeedback,CButton,CCol,CFormGroup,CRow,CCard,CInput } from '@coreui/react'
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const Edit = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [phone,setPhone] = useState()
    const [address,setAddress] = useState()
    const [url,setURL]=useState()

    let location =useLocation()
    let history = useHistory()
    React.useEffect(()=>{
        if(location.state.contact!=undefined){
            setName(location.state.contact['Name'])
            setEmail(location.state.contact['Email'])
            setPhone(location.state.contact['Phone'])
            setAddress(location.state.contact['Address'])
            setURL(location.state.contact['URL'])
        }
        else{
            history.push('/dashboard/account/contacts')
        }
    },[])
    return (
        <>
            <CContainer>
                <CRow className="justify-content-center" style={{ border: 'none' }}>
                    <CCol style={{ border: 'none' }}>
                        <CCard style={{ border: 'none' }}>
                            <h4 className="table-header text-center">Update Contact</h4>
                            <CForm action="" method="post">
                                <CRow className="justify-content-center">
                                    {/**Name */}
                                    <CCol md="8" sm="12" xs="12">
                                        <CFormGroup>
                                            <CLabel
                                                htmlFor="name"
                                                className="custom-label"
                                            >
                                                Name
                                            </CLabel>
                                            <CInput id="name" value={name} onChange={(event)=>setName(event.target.value)} />
                                            <CValidFeedback>Cool! Input is valid</CValidFeedback>
                                        </CFormGroup>
                                    </CCol>
                                    {/**Phone */}
                                    <CCol md="8" sm="12" xs="12">
                                        <CFormGroup>
                                            <CLabel
                                                htmlFor="phone"
                                                className="custom-label"
                                            >
                                                Phone
                                            </CLabel>
                                            <CInput id="phone" value={phone} onChange={(event)=>setPhone(event.target.value)} />
                                            <CValidFeedback>Cool! Input is valid</CValidFeedback>
                                        </CFormGroup>
                                    </CCol>
                                    {/**email */}
                                    <CCol md="8" sm="12" xs="12">
                                        <CFormGroup>
                                            <CLabel
                                                htmlFor="email"
                                                className="custom-label"
                                            >
                                                Email
                                            </CLabel>
                                            <CInput id="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
                                            <CValidFeedback>Cool! Input is valid</CValidFeedback>
                                        </CFormGroup>
                                    </CCol>
                                    {/**address */}
                                    <CCol md="8" sm="12" xs="12">
                                        <CFormGroup>
                                            <CLabel
                                                htmlFor="address"
                                                className="custom-label"
                                            >
                                                Address
                                            </CLabel>
                                            <CInput id="address" value={address} onChange={(event)=>setAddress(event.target.value)} />
                                            <CValidFeedback>Cool! Input is valid</CValidFeedback>
                                        </CFormGroup>
                                    </CCol>
                                    {/**URL */}
                                    <CCol md="8" sm="12" xs="12">
                                        <CFormGroup>
                                            <CLabel
                                                htmlFor="url"
                                                className="custom-label"
                                            >
                                                URL
                                            </CLabel>
                                            <CInput id="url" value={url} onChange={(event)=>setURL(event.target.value)}/>
                                            <CValidFeedback>Cool! Input is valid</CValidFeedback>
                                        </CFormGroup>
                                    </CCol>
                                    {/**contact type */}
                                    <CCol md="8" sm="12" xs="12">
                                        <CFormGroup>
                                            <CLabel htmlFor="contactType" className="custom-label">
                                                Contact Type
                                            </CLabel>
                                            <CSelect custom name="contactType" id="contactType">
                                                <option hidden>Contact type</option>
                                                <option value="1">Community Resource</option>
                                                <option value="2">Professional</option>
                                                <option value="3">Personal</option>

                                            </CSelect>
                                        </CFormGroup>
                                    </CCol>
                                    {/**submit button */}
                                    <CCol md="10" sm="12" xs="12" className="text-center">
                                        <CButton
                                            color="primary"
                                            className="button-primary px-4 mt-3"
                                        >
                                            Update Contact
                                        </CButton>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </>
    )
}

export default Edit