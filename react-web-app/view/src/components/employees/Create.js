import React, { useState, useRef } from "react";
import { CIcon } from "@coreui/icons-react";
import {
  CCard,
  CRow,
  CCol,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CLabel,
  CTextarea,
  CInput,
  CFormGroup,
  CButton,
  CImg,
  CSelect
} from "@coreui/react";
import { useHistory, useLocation } from "react-router-dom";

import { BASE_URL, FILE_API, PUBLIC_API } from "src/config";
import swal from "sweetalert";
import "../employees/Create.css";
const CreateEmployee = () => {
  let location = useLocation();
  let history = useHistory();
  const [count, setCount] = useState(0);
  const inputFile = useRef(null);
  const [avatar, setAvatar] = useState();
  const [image, setImage] = useState();
  const [user_data, setUserData] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [registration, setRegistration] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState();
  const [confirm_password, setConfirmPassword] = useState();
  const checkProp = () => {
    console.log(location.state);
    if (location.state.employee == undefined) {
      history.push("/dashboard/employees");
    }
  };
  function onImageChange(file) {
    setImage(file);
    setAvatar(URL.createObjectURL(file));
    //update_profile()
  }
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  function update_profile() {
    var formData = new FormData();
    formData.append("username", username);
    formData.append("first_name", first_name); // number 123456 is immediately converted to a string "123456"
    formData.append("last_name", last_name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("registration", registration);
    formData.append("password", confirm_password);
    // HTML file input, chosen by user
    if (image != undefined) {
      formData.append("profile_pic", image);
    }
    FILE_API.post("employee/registration/", formData)
      .then((res) => {
        console.log("update result ---- ", res.data);
        if (res.data.success == "True") {
          swal("Updated", "Profile Created successfully", "success");
        }
      })
      .catch((err) => {
        console.log("err -- ", err.response);
      });
  }
  React.useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <>
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCard>
            <CCardHeader>
              <h3>Add a new Employee</h3>
            </CCardHeader>
            <CCardBody>
              <CRow className="justify-content-center">
                <div class="seller-profile-pic-div text-center">
                  <CImg
                    alt="click to upload image"
                    className="mx-auto rounded-circle update-img"
                    src={avatar}
                  />

                  {/**__PRO PIC UP BUTTON__ */}

                  <button onClick={onButtonClick} className="d-block mx-auto btn btn-primary mt-1">
                    {" "}
                    <CIcon name="cil-camera"></CIcon> Add Picture
                  </button>
                </div>
              </CRow>
              <hr />
              <CRow className="justify-content-center">
                <input
                  type="file"
                  id="file"
                  ref={inputFile}
                  style={{ display: "none" }}
                  onChange={(event) => onImageChange(event.target.files[0])}
                />
                {/* <CButton type="button" onClick={onButtonClick}>change</CButton> */}
              </CRow>
              <CFormGroup className="mb-3">
                <CLabel>Username</CLabel>
                <CInput
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                />
              </CFormGroup>
              <CFormGroup className="mb-3">
                <CLabel>First Name</CLabel>
                <CInput
                  value={first_name}
                  onChange={(event) => setFirstName(event.target.value)}
                  type="text"
                />
              </CFormGroup>
              <CFormGroup className="mb-3">
                <CLabel>Last Name</CLabel>
                <CInput
                  value={last_name}
                  onChange={(event) => setLastName(event.target.value)}
                  type="text"
                />
              </CFormGroup>
              <CFormGroup className="mb-3">
                <CLabel>Email</CLabel>
                <CInput
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                />
              </CFormGroup>
              <CFormGroup className="mb-4">
                <CLabel>Phone</CLabel>
                <CInput
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </CFormGroup>
              <CFormGroup className="mb-3">
                <CLabel>Password</CLabel>
                <CInput
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                />
              </CFormGroup>
              <CFormGroup className="mb-3">
                <CLabel>Confirm Password</CLabel>
                <CInput
                  value={confirm_password}
                  onChange={(event) => {
                    if (password == event.target.value)
                      setConfirmPassword(event.target.value);
                  }}
                  type="password"
                />
              </CFormGroup>
              <CFormGroup className="mb-4">
                <CLabel>Registration</CLabel>
                <CInput
                  type="text"
                  placeholder="mac"
                  autoComplete="mac"
                  value={registration}
                  onChange={(event) => setRegistration(event.target.value)}
                />
              </CFormGroup>
              <CFormGroup className="mb-3">
                <CLabel>Address</CLabel>
                <CTextarea
                  type="text"
                  placeholder="Phone"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </CFormGroup>
              <CFormGroup className="mb-4">
                <CLabel>Supervisor Name</CLabel>
                <CSelect custom name="superName" id="superName">
                              <option hidden>Supervisor Name</option>
                              <option value="1">Imon Karim</option>
                              <option value="2">Ratan Hassan</option>
                              <option value="3">Santiago Vasquez</option>
                              <option value="4">Hasibul Hassan</option>
                              <option value="5">Saif Azad</option>
                            </CSelect>
              </CFormGroup>
              {/* <CRow>
                                <CCol xs="12" md="12">
                                    
                                </CCol>
                            </CRow> */}
            </CCardBody>
            <CCardFooter>
              <CButton
                color="primary"
                className="px-4"
                type="button"
                onClick={() => update_profile()}
              >
                Create
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default CreateEmployee;
