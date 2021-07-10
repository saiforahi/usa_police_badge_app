import React,{useState,useRef} from 'react'
import { CCard, CRow,CCol,CCardBody,CCardFooter,CCardHeader,CForm,CTextarea,CInputGroupText,CInput,CInputGroup,CInputGroupPrepend,CButton,CImg } from '@coreui/react'
import { useHistory, useLocation } from 'react-router-dom'
import CIcon from "@coreui/icons-react"
import { BASE_URL, FILE_API, PUBLIC_API } from 'src/config'
import swal from 'sweetalert'
const EmployeeDetails =()=>{
    let location = useLocation()
    let history = useHistory()
    const [count,setCount] = useState(0)
    const inputFile = useRef(null) 
    const [avatar,setAvatar] = useState()
    const [image,setImage]=useState()
    const [user_data,setUserData] = useState(null)
    const [email,setEmail] = useState('')
    const [username,setUsername]=useState('')
    const [first_name,setFirstName]=useState('')
    const [last_name,setLastName] = useState('')
    const [phone,setPhone] = useState('')
    const [registration,setRegistration] = useState('')
    const [address,setAddress] = useState('')
    const [designation,setDesignation] = useState("")
    const checkProp =()=>{
        console.log(location.state)
        if(location.state.employee == undefined){
            history.push('/dashboard/employees')
        }
    }
    function onImageChange(file){
        setImage(file)
        setAvatar(URL.createObjectURL(file))
        //update_profile()
    }
    const onButtonClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
    };
    function update_profile(){
        var formData = new FormData();
        formData.append("username", username);
        formData.append("first_name", first_name); // number 123456 is immediately converted to a string "123456"
        formData.append("last_name", last_name);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("registration", registration);
        formData.append("designation", designation);
        // HTML file input, chosen by user
        if(image!=undefined){
            formData.append("profile_pic", image);
        }
        FILE_API.post('employee/profile/update/'+location.state.employee.id+'/',formData).then((res)=>{
            console.log('update result ---- ',res.data)
            if(res.data.success=="True"){
                swal('Updated','Profile updated successfully','success')
            }
        }).catch((err)=>{
            console.log('err -- ',err.response)
        })
    }
    React.useEffect(()=>{
        if(location.state!=undefined){
            PUBLIC_API.get("profile/details/"+location.state.employee.id+"/").then((res)=>{
                console.log('res --- ',res.data)
                if(res.data.success == "True"){
                    setAvatar(BASE_URL+res.data.data.profile_pic)
                    setUserData(res.data.data)
                    setEmail(res.data.data.email)
                    setUsername(res.data.data.username)
                    setFirstName(res.data.data.first_name)
                    setLastName(res.data.data.last_name)
                    setPhone(res.data.data.phone)
                    setRegistration(res.data.data.registration)
                    setAddress(res.data.data.address)
                }
            })
        }
        setCount(1)
    },[count])
    return(
        <>
        {location.state ? 
        <CRow className="justify-content-center">
            <CCol md="8">
                {user_data!=null && <CCard>
                    <CCardHeader>
                        <h3>Details of <strong>{user_data.first_name+' '+user_data.last_name}</strong></h3>
                    </CCardHeader>
                    <CCardBody>
                            <CRow className="justify-content-center">
                                <CImg onClick={onButtonClick} className="mx-auto" style={{height:"100px",width:"116px",cursor:"pointer"}} shape="rounded" src={avatar} />
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
                                <CInput value={first_name} onChange={(event)=>setFirstName(event.target.value)} type="text" placeholder="First Name" autoComplete="first_name" />
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    Last Name
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput value={last_name} onChange={(event)=>setLastName(event.target.value)} type="text" placeholder="Last Name" autoComplete="last_name" />
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    Email
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput value={email} onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Email" autoComplete="email" />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    Phone
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="Phone" value={phone} onChange={(event)=>setPhone(event.target.value)}  />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    Registration
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="mac" autoComplete="mac" value={registration} onChange={(event)=>setRegistration(event.target.value)}  />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    Designation
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="mac" autoComplete="mac" value={designation} onChange={(event)=>setDesignation(event.target.value)}  />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                                <CInputGroupPrepend>
                                    <CInputGroupText>
                                    Address
                                    </CInputGroupText>
                                </CInputGroupPrepend>
                                <CTextarea type="text" placeholder="Phone" value={address} onChange={(event)=>setAddress(event.target.value)} />
                            </CInputGroup>
                            {/* <CRow>
                                <CCol xs="12" md="12">
                                    
                                </CCol>
                            </CRow> */}
                    </CCardBody>
                    <CCardFooter>
                        <CButton color="primary" className="px-4" type="button" onClick={()=>update_profile()}>Update</CButton>
                    </CCardFooter>
                </CCard>}
            </CCol>
        </CRow>:history.push('/dashboard/employees')}
        </>
    )
}

export default EmployeeDetails