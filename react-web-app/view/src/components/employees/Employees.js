import React from 'react'
import { CCard, CRow,CCol,CCardBody,CCardFooter,CCardHeader,CDataTable } from '@coreui/react'
const Employees=()=>{
    return(
        <>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        Employees
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable/>
                    </CCardBody>
                    <CCardFooter>
                        
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default Employees