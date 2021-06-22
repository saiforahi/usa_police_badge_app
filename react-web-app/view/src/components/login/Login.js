import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {Redirect, useHistory} from "react-router"
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {TOKEN,PUBLIC_API,API} from '../../config'
import swal from 'sweetalert'
import { makeStyles } from '@material-ui/core/styles';
import {LinearProgress} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const Login = () => {
  let classes=useStyles()
    const [submitted,setSubmitted]=useState(false)
    const [email,setEmail]=useState("admin@mail.com");
    const [password,setPassword]=useState("123456");
    const [loginError,setLoginError]=useState("");
    const history=useHistory();
    const isLoggedIn=()=>{
        if(localStorage.getItem(TOKEN)===null){
          return false;
        }
        return true;
    }
    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
          handleSubmit();
        }
      };
      const handleSubmit=()=>{
        setSubmitted(true)
        console.log(JSON.stringify({email:email,password:password}))
        // PUBLIC_API.post('/login',JSON.stringify({email:email,password:password})).then((response1)=>{
        //   if(response1.data.status===true){
        //     console.log(response1.data);
        //     history.push({pathname:'/dashboard',user:{email:email,password:password}})
        //     // history.push({pathname:'/otp-verification',user:{email:email,password:password}})
        //     swal('OTP sent',response1.data.message,'success')
        //   }
        // }).catch(error=>{
        //   setLoginError("Please provide correct credentials");
        //   console.log(error)
        //   setSubmitted(false)
        //   swal("Error!",error.message,"error");
        // })
        setTimeout(()=>{
          setSubmitted(false)
          history.push({pathname:'/dashboard',user:{email:email,password:password}})
        },4000)
      }
    return (
        <>
        {isLoggedIn() && <Redirect to="/dashboard"/>}
        <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
            <CRow className="justify-content-center">
            <CCol md="5">
                <CCardGroup>
                <CCard className="p-4">
                    <CCardBody>
                    <CForm>
                        <h1>Sign In</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                            <CInputGroupText>
                            <CIcon name="cil-user" />
                            </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput value={email} onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Email" autoComplete="email" />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                            <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                            </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput onKeyDown={handleKeypress} type="password" placeholder="Password" autoComplete="current-password" onChange={(event)=>setPassword(event.target.value)} value={password} />
                        </CInputGroup>
                        <CRow>
                        <CCol xs="12" md="12">
                          {submitted ? <div className={classes.root}> <LinearProgress color="primary" /> </div>:<CButton color="primary" className="px-4" onClick={handleSubmit}>Login</CButton>}
                        </CCol>
                        {/* <CCol xs="6" className="text-right">
                            <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol> */}
                        </CRow>
                    </CForm>
                    </CCardBody>
                </CCard>
                {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                    <CCardBody className="text-center">
                    <div>
                        <h2>Sign up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                        <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                        </Link>
                    </div>
                    </CCardBody>
                </CCard> */}
                </CCardGroup>
            </CCol>
            </CRow>
        </CContainer>
        </div>
        </>
    )
}

export default Login
