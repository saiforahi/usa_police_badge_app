import React from "react";
import "./contacts.css";
import {
  CTabs,
  CNav,
  CNavLink,
  CNavItem,
  CTabContent,
  CTabPane,
  CCard,
  CRow,
  CCol,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CDataTable,
  CBadge,
  CButton,
  CContainer,
  CFormGroup,
  CSelect,
  CLabel,
  CInput,
  CValidFeedback,
CForm
} from "@coreui/react";
const Contacts = () => {
  const employeeList =[
    {id:1,Name:'Mr X',Email:'x@mail.com'},
    {id:2,Name: 'Mr Y',Email:'y@mail.com'}
]
  return (
    <>
      <CTabs activeTab="viewContact">
        <CNav variant="tabs" className="tab-style">
          <CNavItem>
            <CNavLink data-tab="viewContact" className="special">
              View Contact
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="addContact" className="special">
              Add Contact
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane data-tab="viewContact">
            {/**View contact details */}
            <CRow>
            <CCol md="12">
            <CCard className="mt-3">
            <CCardHeader>
                        <h4 className="table-header">View Contacts</h4>
                    </CCardHeader>
                    <CCardBody>
                    <CDataTable
                        items={employeeList}
                        fields={[
                            { key: '#',_style: { width: '5%' }, _classes: 'font-weight-bold' },
                            'Name','Phone','Email','Address','URL','Contact Type',{key:'Action',label:'',_style: { width: '12%' },sorter:true,filter:true}
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
                                        <CButton onClick={() => { }} type="button" size="sm" color="danger">Delete</CButton> <CButton size="sm" type="button" color="primary">Edit</CButton>
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
          <CTabPane data-tab="addContact">
            {/**add contact form */}
            <CContainer>
            <CRow className="justify-content-center">
            <CCol md="10" sm="12" xs="12">
            <CCard className="custom-card">
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
            </CContainer>
          </CTabPane>
        </CTabContent>
      </CTabs>
    </>
  );
};
export default Contacts;
