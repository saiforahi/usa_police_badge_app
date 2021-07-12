import {CBadge,CInput,CValidFeedback,CFormGroup,CButton,CLabel,CForm,CSelect, CContainer, CTabs, CNav, CNavItem, CNavLink, CTabPane, CTabContent, CCol, CRow, CCard, CCardBody, CDataTable } from '@coreui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import './Contacts.css'
const MyBadge = () => {
    let history = useHistory()
    const contacts = [
        { 'Name': 'John Hopkins', 'Email': 'hopkins@mail.com', 'Phone': '1524367743', 'Address': 'Ballin St, MO', 'URL': '' },
        { 'Name': 'Robin Donovan', 'Email': 'robin@mail.com', 'Phone': '8754567787', 'Address': 'LA', 'URL': '' }
    ]
    React.useEffect(() => {
        //swal('Sorry!','This service is under development','warning')
    }, [])
    return (
        <>
            <CContainer>
                <CTabs activeTab="view">
                    <CNav variant="tabs">
                        <CNavItem>
                            <CNavLink data-tab="view">
                                View contacts
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink data-tab="add">
                                Add Contact
                            </CNavLink>
                        </CNavItem>
                    </CNav>
                    <CTabContent>
                        <CTabPane data-tab="view">
                            <CRow>
                                <CCol>
                                    <CCard>
                                        <CCardBody>
                                            <CDataTable
                                                items={contacts}
                                                fields={[
                                                    'Name', 'Email', 'Phone', 'Address', 'URL',{key:'Action',label:'',_style: { width: '8%' },sorter:false,filter:false}
                                                ]}
                                                light
                                                hover
                                                striped
                                                bordered
                                                sorter
                                                columnFilter
                                                // clickableRows
                                                // onRowClick={(row)=>{
                                                //     history.push({
                                                //         pathname: '/dashboard/employees/details',
                                                //         state: { employee: row }
                                                //     })
                                                // }}
                                                size="sm"
                                                itemsPerPage={10}
                                                pagination
                                                scopedSlots = {{
                                                    'Action':
                                                    (item)=>(
                                                        <td>
                                                            <CBadge>
                                                                <CButton onClick={()=>{history.push({pathname: '/dashboard/officer/contacts/edit',state: { contact: item }})}} size="sm" type="button" color="primary">Edit</CButton>
                                                            </CBadge>
                                                        </td>
                                                    )
                                                }}
                                            />
                                        </CCardBody>
                                    </CCard>
                                </CCol>
                            </CRow>
                        </CTabPane>
                        <CTabPane data-tab="add">
                            <CRow className="mt-5" style={{border:'none'}}>
                                <CCol style={{border:'none'}}>
                                    <CCard style={{border:'none'}}>
                                        <h4 className="table-header text-center">Add Contact</h4>
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
                                                        <CInput id="name" />
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
                                                        <CInput id="phone" />
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
                                                        <CInput id="email" />
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
                                                        <CInput id="address" />
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
                                                        <CInput id="url" />
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
                                                        Save Contact
                                                    </CButton>
                                                </CCol>
                                            </CRow>
                                        </CForm>
                                    </CCard>
                                </CCol>
                            </CRow>
                        </CTabPane>
                    </CTabContent>
                </CTabs>
            </CContainer>
        </>
    )
}

export default MyBadge