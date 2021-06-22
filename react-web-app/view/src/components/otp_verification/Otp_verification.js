import { CContainer, CRow,CCol, CCardGroup, CCardBody,CInputGroup,CInputGroupPrepend,CInput,CCard,CInputGroupText,CForm,CButton } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import NotesIcon from '@material-ui/icons/Notes';
import { useHistory, useLocation } from 'react-router';
import { PUBLIC_API ,API,TOKEN} from 'src/config';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
const OTP=()=>{
    let classes=useStyles()
    let location=useLocation()
    let history=useHistory()
    const [code,setCode]=useState("")
    const [submitted,setSubmitted]=useState(false)
    const [count,setCount]=useState(0)
    const handleKeypress = e => {

        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
          handleSubmit();
        }
    };
    const handleSubmit=()=>{
        setSubmitted(!submitted)
        PUBLIC_API.post('/otp-verification',JSON.stringify({email:location.user.email,password:location.user.password,otp:code})).then(response=>{
            console.log(response.data)
            if(response.data.status===true){
                API.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
                localStorage.setItem(TOKEN,response.data.access_token);
                API.get('/user').then(response2=>{
                console.log(response2.data)
                localStorage.setItem('user',JSON.stringify(response2.data))
                API.get('/permission/all_permissions').then(res=>{
                    localStorage.setItem('permissions',JSON.stringify(res.data.permissions))
                    history.push('/dashboard');
                })
                
                })
            }
            else{
                setSubmitted(!submitted)
                history.push('/dashboard');
            }
        })
    }
    useEffect(()=>{
        console.log(location.user)
        if(location.user===undefined){
            history.push('/login')
        }
    },[count])
    return(
        <>
        <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md="5">
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                <h1>Two Step Verification</h1>
                                    <p className="text-muted">Enter OTP, we sent to your Email</p>
                                    <CInputGroup className="mb-3">
                                        <CInputGroupPrepend>
                                            <CInputGroupText>
                                                {/* <NotesIcon fontSize="small"/> */}
                                            
                                            </CInputGroupText>
                                        </CInputGroupPrepend>
                                        <CInput onKeyDown={handleKeypress} value={code} onChange={(event)=>setCode(event.target.value)} type="text" placeholder="OTP code" autoComplete="code" />
                                    </CInputGroup>
                                    
                                    <CRow>
                                        <CCol xs="6">
                                        {submitted ? <div className={classes.root}> <LinearProgress color="primary" /> </div>:<CButton type="button" color="primary" className="px-4" onClick={handleSubmit}>Verify</CButton>}
                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
        </>
    )
}
export default OTP;