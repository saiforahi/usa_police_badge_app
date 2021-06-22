import React, { useState } from 'react'
import {
    CRow,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CLabel,
    CFormGroup,
    CSelect,
    CCardFooter,CInputGroup,CInputGroupAppend,
    CInput,CFormText,CForm,
  } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {API} from '../../config'
import swal from 'sweetalert';

const CreateUser=()=>{
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const [firstName,setFirstName]=useState("")
    const [firstNameError,setFirstNameError]=useState("");
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [role,setRole]=useState(-1)
    const [roles,setRoles]=useState([])
    
    const reset_form=()=>{
        setPassword("");
        setFirstName("");
        setLastName("")
        setEmail("");
        setRole(-1);
        setRoles([]);
        setPhone("")
        setConfirmPassword("")
    }
    React.useEffect(() => {
        API.get('/roles/all').then((response)=>{
            console.log(response.roles)
            setRoles(response.data.roles)
        })
      },[]);
    const handleValidation=()=>{
        let formIsValid=true;
        let errors=[];
        if(!firstName||firstName===""||firstName===undefined){
            setFirstNameError("Please enter first name")
            errors.push("Please enter first name");
            formIsValid=false;
        }
        else{
            setFirstNameError("");
        }
        return {valid:formIsValid,errors:errors};
    } 
    const handleSubmit=(e)=>{
        let result=handleValidation();
        if(result.valid===true){
            var data=JSON.stringify({name:firstName+' '+lastName,email:email,password:password,password_confirmation:confirmPassword,phone:phone});
            console.log(data)
            API.post('/users/store',data).then((response)=>{
                console.log(response.data);
                if(response.data.status===true){
                    reset_form();
                    swal("Created!",response.data.message,"success");
                }
                else if(response.data.status===false){
                    swal("Failed",response.data.message,"error");
                }
            }).catch(error=>{
                console.log(error);
            })
        }
    }
    
    return(
        <>
            <CRow>
                <CCol xs="12" md="6">
                    <CCard borderColor="white">
                        <CCardHeader><h3>Create User</h3></CCardHeader>
                        <CCardBody>
                            <CForm className="form-horizontal">
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="text-input">First Name *</CLabel>
                                        <CInput value={firstName} onChange={(event)=>setFirstName(event.target.value)} id="text-input" name="text-input" placeholder="Enter first name for new user" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="text-input">Last Name *</CLabel>
                                        <CInput value={lastName} onChange={(event)=>setLastName(event.target.value)} id="text-input" name="text-input" placeholder="Enter last name for new user" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="text-input">Email *</CLabel>
                                        <CInput value={email} onChange={(event)=>setEmail(event.target.value)} id="text-input" name="text-input" placeholder="Enter email for new user" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="text-input">Phone *</CLabel>
                                        <CInput value={phone} onChange={(event)=>setPhone(event.target.value)} id="phone-input" name="phone-input" placeholder="Enter phone for new user" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="text-input">Select Role *</CLabel>
                                        <CSelect value={role} onChange={(event)=>setRole(event.target.value)} custom name="selectRole" id="selectRole">
                                            {roles!==undefined && Array.from(roles).map((role)=>(<option key={role.id} value={role.id}>{role.name}</option>))}
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="text-input">Password *</CLabel>
                                        <CInput value={password} onChange={(event)=>setPassword(event.target.value)} id="pass-input" name="pass-input" placeholder="Enter password for new user" />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol>
                                        <CLabel htmlFor="text-input">Confirm Password *</CLabel>
                                        <CInput value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)} id="confirm-pass-input" name="confirm-pass-input" placeholder="Confirm password" />
                                    </CCol>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                                <CButton type="button" onClick={handleSubmit} size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" onClick={reset_form} size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default CreateUser;