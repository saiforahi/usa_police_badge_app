import { CCard, CCardBody, CFormGroup, CInput,CLabel, CSelect } from '@coreui/react'
import {
    CModal,
    CModalHeader,
    CModalBody,CModalFooter,CButton
  } from '@coreui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FILE_API } from 'src/config'
import swal from 'sweetalert'

const Create =(props)=>{
    const [showModal,setShowModal] = useState(true)
    const [mac,setMac] = useState()
    const [nfc,setNfc]=useState()
    const [selectedOfficer,setSelectedOfficer]=useState()
    const officers = useSelector(state => {
        let data=[]
        Array.from(state.employees.data).forEach((item,index)=>{
            data.push({id:item.id,name:item.first_name+' '+item.last_name})
        })
        return data
    })
    const handleCallback = ()=>{
        setShowModal(false)
        props.parentCallback(false)
    }
    const assignBadge =()=>{
        var formData = new FormData();
        formData.append("nfc_number", nfc);
        formData.append("mac_address", mac); // number 123456 is immediately converted to a string "123456"
        formData.append("user", selectedOfficer);
        FILE_API.post('employee/badge/add/',formData).then((res)=>{
            swal('Assigned!','New badge added and assigned','success').then(()=>{
                handleCallback()
            })
        })
    }
    React.useEffect(()=>{
        if(props.data){
            setNfc(props.data['Badge Number'])
        }
    },[showModal])
    return(
        <>
        <CModal size="lg" show={showModal} onClose={handleCallback} centered>
            <CModalHeader closeButton><h3>Create a new badge and Assign to an officer</h3></CModalHeader>
            <CModalBody>
                <CCard style={{border:"none"}}>
                    <CCardBody>
                        <CFormGroup className="mb-3">
                            <CLabel>NFC</CLabel>
                            <CInput value={nfc} placeholder="Enter new NFC number" onChange={(event)=>setNfc(event.target.value)} type="text"  />
                        </CFormGroup>
                        <CFormGroup className="mb-3">
                            <CLabel>Registration No</CLabel>
                            <CInput value={mac} placeholder="Enter registration no" onChange={(event)=>setMac(event.target.value)} type="text"  />
                        </CFormGroup>
                        <CFormGroup className="mb-3">
                            <CLabel>Officer</CLabel>
                            <CSelect value={selectedOfficer} onChange={(event)=>setSelectedOfficer(event.target.value)}>
                                {officers.length>0 && Array.from(officers).map((option)=>(<option key={option.id} value={option.id}>{option.name}</option>))}
                            </CSelect>
                        </CFormGroup>
                    </CCardBody>
                </CCard>
            </CModalBody>
            <CModalFooter>
                <CButton onClick={assignBadge} color="primary">Assign</CButton>{' '}
                <CButton onClick={handleCallback} color="secondary">Cancel</CButton>
            </CModalFooter>
        </CModal>
        {/* <CContainer>
            <CRow className="justify-content-center">
                <CCol md="8">
                    <CCard>
                        <CCardHeader>

                        </CCardHeader>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer> */}
        </>
    )
}

export default Create