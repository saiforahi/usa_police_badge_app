import React, { useState, useRef } from 'react'
import { CContainer, CNavItem, CNavLink, CTabContent, CTabs, CNav, CTabPane, CCard, CRow, CCol, CCardBody, CLabel, CFormText, CInputCheckbox, CInputRadio, CSwitch, CInputFile, CSelect, CCardFooter, CCardHeader, CForm, CTextarea, CInputGroupText, CInput, CInputGroup, CInputGroupPrepend, CButton, CImg, CFormGroup } from '@coreui/react'
import { CIcon } from '@coreui/icons-react';
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL, FILE_API } from 'src/config'
import swal from 'sweetalert'
import './Account.css'
import { fetchDetailsThunk } from 'src/store/slices/UserSlice'
const Account = () => {
  const data = useSelector(state => state.user.data)
  const [avatar, setAvatar] = useState()
  const [image, setImage] = useState()
  const inputFile = useRef(null)
  const [email, setEmail] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [registration, setRegistration] = useState('')
  const [address, setAddress] = useState('')
  const [designation, setDesignation] = useState("")
  const [dob, setDOB] = useState('')
  const [hair, setHair] = useState('')
  const [eyes, setEyes] = useState('')
  const dispatch = useDispatch()
  function onImageChange(file) {
    setImage(file)
    setAvatar(URL.createObjectURL(file))
    //update_profile()
  }
  const update_info = () => {
    let formData = new FormData()
    formData.append('first_name', first_name)
    formData.append('last_name', last_name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('registration', registration)
    formData.append('address', address)
    formData.append('designation', designation)
    formData.append('date_of_birth', dob)
    formData.append('hair', hair)
    formData.append('eyes', eyes)
    if (image != undefined) {
      formData.append("profile_pic", image);
    }
    FILE_API.post('employee/profile/update/' + localStorage.getItem('user_id') + '/', formData).then((res) => {
      console.log('update result ---- ', res.data)
      if (res.data.success == "True") {
        dispatch(fetchDetailsThunk(localStorage.getItem('user_id')))
        swal('Updated', 'Profile updated successfully', 'success')
      }
    }).catch((err) => {
      console.log('err -- ', err.response)
    })
  }
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    document.getElementById('file').click();
    //inputFile.current.click();
  };
  function populate_existing_data() {
    setFirstName(data.first_name)
    setLastName(data.last_name)
    setEmail(data.email)
    setPhone(data.phone)
    setAddress(data.address)
    setRegistration(data.registration)
    setDesignation(data.designation)
    setAvatar(BASE_URL + data.profile_pic)
    setDOB(data.date_of_birth)
    setHair(data.hair)
    setEyes(data.eyes)
  }
  React.useEffect(() => {
    populate_existing_data()
  }, [])
  return (
    <>
      <CContainer>
        <CTabs activeTab="my-details">
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink data-tab="my-details" className="special">
                My Details
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="organization-details" className="special">
                Supervisor Details
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane data-tab="my-details">
              <CRow className="justify-content-center mt-5">
                <CCol xs="12" md="6">
                  <CCard>
                    <CCardHeader>
                      <h3>Account detail for {data.first_name + ' ' + data.last_name}</h3>
                    </CCardHeader>
                    <CCardBody>
                      <CForm className="form-horizontal">
                        {/* <CFormGroup row>
                        <CCol md="3">
                          <CLabel>Username</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <p className="form-control-static">{data.username}</p>
                        </CCol>
                      </CFormGroup> */}
                        <CRow className="justify-content-center">
                          <CImg onClick={onButtonClick} className="mx-auto" style={{ height: "100px", width: "116px", cursor: "pointer" }} shape="rounded" src={avatar} />
                        </CRow>
                        <hr />
                        <CRow className="justify-content-center">
                          <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} onChange={(event) => onImageChange(event.target.files[0])} />
                          {/* <CButton type="button" onClick={onButtonClick}>change</CButton> */}
                        </CRow>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="text-input">First Name</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={first_name} onChange={(event) => setFirstName(event.target.value)} id="text-input" name="text-input" placeholder="Text" />
                            <CFormText>Your first name</CFormText>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="text-input">Last Name</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={last_name} onChange={(event) => setLastName(event.target.value)} id="text-input" name="text-input" placeholder="Text" />
                            <CFormText>Your Last name</CFormText>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="email-input">Email</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="email" value={email} onChange={(event) => setEmail(event.target.value)} id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" />
                            <CFormText className="help-block">Please enter your email</CFormText>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="Phone-input">Phone</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={phone} onChange={(event) => setPhone(event.target.value)} id="Phone-input" name="Phone-input" placeholder="Enter Phone" autoComplete="phone" />
                            <CFormText className="help-block">Please enter your phone no</CFormText>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="Phone-input">Registration</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={registration} onChange={(event) => setRegistration(event.target.value)} id="Phone-input" name="Phone-input" placeholder="Enter Phone" autoComplete="phone" />
                            <CFormText className="help-block">Please enter your registration no</CFormText>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="Phone-input">Designation</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={designation} onChange={(event) => setDesignation(event.target.value)} id="Phone-input" name="Phone-input" placeholder="Enter Phone" autoComplete="phone" />
                            <CFormText className="help-block">Please enter your designation</CFormText>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="date-input">Date of Birth</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="date" value={dob} onChange={(event) => setDOB(event.target.value)} id="date-input" name="date-input" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="date-input">Department</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" id="date-input" name="date-input" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="disabled-input">Color of Hairs</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={hair} onChange={(event) => setHair(event.target.value)} id="disabled-input" name="disabled-input" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="disabled-input">Color of Eyes</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={eyes} onChange={(event) => setEyes(event.target.value)} id="disabled-input" name="disabled-input" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="textarea-input">Address</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CTextarea
                              name="textarea-input"
                              id="textarea-input"
                              rows="9"
                              placeholder="address..."
                              value={address}
                              onChange={(event) => setAddress(event.target.value)}
                            />
                          </CCol>
                        </CFormGroup>
                      </CForm>
                    </CCardBody>
                    <CCardFooter>
                      <CButton type="button" onClick={update_info} size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="button" onClick={() => populate_existing_data()} size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            </CTabPane>
            <CTabPane data-tab="organization-details">
              <CRow className="justify-content-center mt-5">
                <CCol md="8" sm="12" xs="12">
                  <CCard>
                    <CCardHeader> <h4 className="table-header text-center">Organization Details</h4></CCardHeader>
                    <CCardBody>
                      <CRow className="justify-content-center">


                        <CCol md="12">
                          {/**Company Name */}
                          <h5><span className="custom-label">Company Name : </span> <span className="custom-details">NYPD</span></h5>
                          <h5><span className="custom-label">Department Name : </span> <span className="custom-details">Homicide</span></h5>
                          <br />
                          <div className="text-center">
                            <CImg className="mx-auto rounded-circle update-img" src={"http://103.123.8.52:8075/media/uploads/users/images/8_K285K2J.jpg"} />
                            <p className="mt-1">Supervisor Profile Picture</p>
                          </div>
                          <h5><span className="custom-label">Supervisor Contact Name : </span> <span className="custom-details">Santiago Vazquez</span></h5>
                          <h5><span className="custom-label">Address : </span> <span className="custom-details">4/A,76th Street,Manhattan,NewYork</span></h5>
                          <div className="d-flex">
                            <h5 className="d-inline-block mr-2"><span className="custom-label">Phone : </span> <span className="custom-details">+12783728288</span></h5>
                            <h5 className="d-inline-block"><span className="custom-label">Email : </span> <span className="custom-details">santiago19@gmail.com</span></h5>
                          </div>


                        </CCol>


                      </CRow>

                    </CCardBody>
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

export default Account