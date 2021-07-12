import { CContainer, CRow,CCol, CCardHeader,CCard,CCardBody,CDataTable,CButton } from '@coreui/react'
import React, { useState } from 'react'
import swal from 'sweetalert'

const Time = ()=>{
    const time_history = useState([{'Event Type':'Clock in','Date':'6/7/2021','Time':'09:38 AM'},{'Event Type':'Clock Out','Date':'6/7/2021','Time':'06:38 AM'}])
    const history = [{'Event Type':'Clock in','Date':'6/7/2021','Time':'09:38 AM'},{'Event Type':'Clock Out','Date':'6/7/2021','Time':'06:38 PM'}]
    React.useEffect(()=>{
        // swal('Sorry!','This service is under development','warning')
    },[])
    return(
        <>
        <CContainer>
            <CRow>
                <CCol>
                    <CButton color="primary" type="button">Clock In</CButton>
                </CCol>
            </CRow>
            <hr/>
            <CRow>
                <CCol md="8">
                    <CCard>
                    <CCardBody>
                        <CDataTable
                        items={history}
                        fields={[
                            'Event Type','Date','Time'
                        ]}
                        light
                        hover
                        striped
                        bordered
                        sorter
                        columnFilter
                        // clickableRows
                        // onRowClick={(row)=>{
                        //     history.push({
                        //         pathname: '/dashboard/employees/details',
                        //         state: { employee: row }
                        //     })
                        // }}
                        size="sm"
                        itemsPerPage={10}
                        pagination
                        />
                    </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
        </>
    )
}

export default Time