import React from 'react'
import { CCard, CRow,CCol,CCardBody,CCardFooter,CCardHeader } from '@coreui/react'
import { useLocation } from 'react-router-dom'
const EmployeeDetails =(employee)=>{
    let location = useLocation()
    React.useEffect(()=>{
        console.log(location.state.employee)
    },[])
    return(
        <>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        Details of {location.state.employee.Name}
                    </CCardHeader>
                    <CCardBody>

                    </CCardBody>
                    <CCardFooter>

                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default EmployeeDetails