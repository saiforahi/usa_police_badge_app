import React, { useState } from "react";
import "./contacts.css";
import "../department-type/DepartmentType";
import {
  CTabs,
  CBadge,
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
  CButton,
  CContainer,
  CFormGroup,
  CSelect,
  CLabel,
  CInput,
  CValidFeedback,
  CForm,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsData } from "src/store/slices/ContactSlice";
import { FILE_API } from "src/config";
import swal from "sweetalert";

const Contacts = () => {
  //add contact form states
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [phone,setPhone] = useState()
  const [address,setAddress] = useState()
  const [url,setURL] = useState()
  const [type,setType] = useState()
  
  function save_contact(){
    var formData = new FormData()
    formData.append('name',name)
    formData.append('phone',phone)
    formData.append('email',email)
    formData.append('address',address)
    formData.append('department',type)
    formData.append('created_by',localStorage.getItem('user_id'))
    FILE_API.post('contact/add/').then((res)=>{
      if(res.data.success == 'True'){
        swal('Saved','Contact Saved!','success').then(()=>{
          history.push('/dashboard/contacts')
        })
      }
    })
  }
  let history = useHistory();
  const dispatch = useDispatch()
  const departments = useSelector(state=>state.departments.data)
  const contacts = useSelector(state=> {
    let data = []
    Array.from(state.contacts.data).forEach((item,index)=>{
      data.push({'#':index+1,'Name':item.name,'Phone':item.phone,'Email':item.email,'Address':item.address,'URL':'','Department':item.department.department_name})
    })
    return data
  })
  const [showContactDetails, setShowContactDetails] = useState(false);
  const toggle = () => {
    setShowContactDetails(!showContactDetails);
  };
  function handle_contact_modal() {
    console.log("edit view");
    setShowContactDetails(true);
  }
  React.useEffect(()=>{
    dispatch(fetchContactsData())
  },[])
  return (
    <>
      {/**__________Contact Edit Modal__________ */}
      <CModal show={showContactDetails} onClose={toggle} centered>
        <CModalHeader closeButton>Edit Contact</CModalHeader>
        <CModalBody>
          <CForm action="" method="post">
            {/**Name */}
            <div className="mb-3">
              <CFormGroup>
                <CLabel htmlFor="name" className="custom-label">
                  Name
                </CLabel>
                <CInput id="name" value="Imon Karim" />
                <CValidFeedback>Cool! Input is valid</CValidFeedback>
              </CFormGroup>
            </div>
            {/**Phone */}
            <div className="mb-3">
              <CFormGroup>
                <CLabel htmlFor="phone" className="custom-label">
                  Phone
                </CLabel>
                <CInput id="phone" value="+189839489394" />
                <CValidFeedback>Cool! Input is valid</CValidFeedback>
              </CFormGroup>
            </div>
            {/**email */}
            <div className="mb-3">
              <CFormGroup>
                <CLabel htmlFor="email" className="custom-label">
                  Email
                </CLabel>
                <CInput id="email" value="imon99@gmail.com" />
                <CValidFeedback>
                  Cool! Input is valid
                </CValidFeedback>
              </CFormGroup>
            </div>
            {/**address */}
            <div className="mb-3">
              <CFormGroup>
                <CLabel htmlFor="address" className="custom-label">
                  Address
                </CLabel>
                <CInput id="address" value="27 Jump Street,NY" />
                <CValidFeedback>
                  Cool! Input is valid
                </CValidFeedback>
              </CFormGroup>
            </div>
            {/**URL */}
            <div className="mb-3">
              <CFormGroup>
                <CLabel htmlFor="url" className="custom-label">
                  URL
                </CLabel>
                <CInput id="url" />
                <CValidFeedback>
                  Cool! Input is valid
                </CValidFeedback>
              </CFormGroup>
            </div>
            {/**contact type */}
            <div className="mb-3">
              <CFormGroup>
                <CLabel
                  htmlFor="contactType"
                  className="custom-label"
                >
                  Department Type
                </CLabel>
                <CSelect custom name="contactType" id="contactType">
                  <option hidden>Department type</option>
                  {departments.length>0 && Array.from(departments).map((department,index)=>(<option value={department.id} key={department.id}>{department.department_name}</option>))}
                </CSelect>
              </CFormGroup>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Update Contact</CButton>{" "}
          <CButton color="secondary" onClick={toggle}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
      {/**__________Contact Edit Modal ENDS______ */}
      {/**__TABS START____ */}
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
          {/* <CNavItem>
            <CNavLink data-tab="addDept" className="special">
              Add Department
            </CNavLink>
          </CNavItem> */}
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
                      items={contacts}
                      fields={[
                        {
                          key: "#",
                          _style: { width: "5%" },
                          _classes: "font-weight-bold",
                        },
                        "Name",
                        "Phone",
                        "Email",
                        "Address",
                        "URL",
                        "Department",
                        {
                          key: "Action",
                          label: "",
                          _style: { maxWidth: "5%" },
                          sorter: true,
                          filter: true,
                        },
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
                      scopedSlots={{
                        Action: (item) => (
                          <td>
                            <CBadge>
                              <CButton
                                onClick={() => { }}
                                type="button"
                                size="sm"
                                color="danger"
                              >
                                Delete
                              </CButton>{" "}
                              <CButton
                                size="sm"
                                type="button"
                                color="primary"
                                onClick={() => handle_contact_modal()}
                              >
                                Edit
                              </CButton>
                            </CBadge>
                          </td>
                        ),
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
                            <CLabel htmlFor="name" className="custom-label">
                              Name
                            </CLabel>
                            <CInput id="name" value={name} onChange={(event)=>setName(name)} />
                            <CValidFeedback>
                              Cool! Input is valid
                            </CValidFeedback>
                          </CFormGroup>
                        </CCol>
                        {/**Phone */}
                        <CCol md="8" sm="12" xs="12">
                          <CFormGroup>
                            <CLabel htmlFor="phone" className="custom-label">
                              Phone
                            </CLabel>
                            <CInput id="phone" value={phone} onChange={(event)=>setPhone(name)} />
                            <CValidFeedback>
                              Cool! Input is valid
                            </CValidFeedback>
                          </CFormGroup>
                        </CCol>
                        {/**email */}
                        <CCol md="8" sm="12" xs="12">
                          <CFormGroup>
                            <CLabel htmlFor="email" className="custom-label">
                              Email
                            </CLabel>
                            <CInput id="email" value={email} onChange={(event)=>setEmail(name)}/>
                            <CValidFeedback>
                              Cool! Input is valid
                            </CValidFeedback>
                          </CFormGroup>
                        </CCol>
                        {/**address */}
                        <CCol md="8" sm="12" xs="12">
                          <CFormGroup>
                            <CLabel htmlFor="address" className="custom-label">
                              Address
                            </CLabel>
                            <CInput id="address" value={address} onChange={(event)=>setAddress(name)} />
                            <CValidFeedback>
                              Cool! Input is valid
                            </CValidFeedback>
                          </CFormGroup>
                        </CCol>
                        {/**URL */}
                        <CCol md="8" sm="12" xs="12">
                          <CFormGroup>
                            <CLabel htmlFor="url" className="custom-label">
                              URL
                            </CLabel>
                            <CInput id="url" value={url} onChange={(event)=>setURL(name)}/>
                            <CValidFeedback>
                              Cool! Input is valid
                            </CValidFeedback>
                          </CFormGroup>
                        </CCol>
                        {/**contact type */}
                        <CCol md="8" sm="12" xs="12">
                          <CFormGroup>
                            <CLabel
                              htmlFor="contactType"
                              className="custom-label"
                            >
                              Department Type
                            </CLabel>
                            <CSelect custom name="contactType" id="contactType" value={type} onChange={(event)=>setType(name)}>
                              <option hidden>Department type</option>
                              {departments.length>0 && Array.from(departments).map((department,index)=>(<option value={department.id} key={department.id}>{department.department_name}</option>))}
                            </CSelect>
                          </CFormGroup>
                        </CCol>
                        {/**submit button */}
                        <CCol md="10" sm="12" xs="12" className="text-center">
                          <CButton
                            color="primary"
                            className="button-primary px-4 mt-3"
                            type="button"
                            // onClick={()=>{save_contact()}}
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

          {/* **____DEPARTMENT ADDING START */}
          {/* <CTabPane data-tab="addDept">
            <Department></Department>
          </CTabPane> */}
        </CTabContent>
      </CTabs>
    </>
  );
};
export default Contacts;
