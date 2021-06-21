import React from 'react'
import {
    CCard,
    CCardHeader,
    CRow,CCol,
    CCardBody,
    CCardFooter
  } from '@coreui/react'
  
const EmployeeList = ()=>{
    React.useEffect(()=>{
        console.log('Employees list')
    },[])
    return(
        <div>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>
                            Employees
                        </CCardHeader>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    )
}

export default EmployeeList