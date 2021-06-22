import React from 'react'
import { CCard, CRow,CCol,CCardBody,CCardFooter,CCardHeader,CDataTable,CBadge,CButton } from '@coreui/react'
const Badges = ()=>{
    const badgeList=[
        {Number:'1245678','Created Date':'21-01-2021','Scans':'12','Global Scans':'19'}
    ]
    return(
        <>
         <CRow>
            <CCol md="12">
                <CCard>
                    <CCardHeader>
                        Badges
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                        items={badgeList}
                        fields={[
                            { key: '#',_style: { width: '5%' }, _classes: 'font-weight-bold' },
                            'Number','Created Date','Assigned To','Scans','Global Scans',{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
                        ]}
                        light
                        hover
                        striped
                        bordered
                        sorter
                        columnFilter
                        clickableRows
                        // onRowClick={(row)=>{
                        //     history.push({
                        //         pathname: '/dashboard/employees/details',
                        //         state: { employee: row }
                        //     })
                        // }}
                        size="sm"
                        itemsPerPage={10}
                        pagination
                        scopedSlots = {{
                            'Action':
                            (item)=>(
                                <td>
                                <CBadge>
                                    <CButton onClick={()=>{}} type="button" size="sm" color="danger">Delete</CButton> <CButton size="sm" type="button" color="primary">View</CButton>
                                </CBadge>
                                </td>
                            )
                        }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default Badges