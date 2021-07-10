import React from 'react'
import {
    CContainer,
    CCardHeader,CCardBody,CCard,CBadge,CButton,CCardFooter,CDataTable,CRow,CCol
  } from '@coreui/react'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'
import { useHistory } from 'react-router'
const ScanHistory =()=>{
    let history = useHistory()
    const scans = useSelector(state => {
        let data =[]
        Array.from(state.notifications.data).forEach((item,index)=>{
            data.push({"#":index+1,"Name":item.nfc.user.first_name+' '+item.nfc.user.last_name,"Badge Number":item.nfc.nfc_number,'Date':new Date(item.created_at).toLocaleDateString()+' '+new Date(item.created_at).toLocaleTimeString()})
        })
        return data
    })
    return(
        <>
        <CContainer>
        <CRow>
            <CCol md="12">
                <CCard>
                    <CCardHeader>
                        <h3>Scans</h3>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                        items={scans}
                        fields={[
                            { key: '#',_style: { width: '5%' }, _classes: 'font-weight-bold' },
                            'Name','Email','Badge Number','Assigned To','Assigned Date','Scans','Global Scans','Date',{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
                        scopedSlots = {{
                            'Action':
                            (item)=>(
                                <td>
                                    <CBadge>
                                        <CButton onClick={() => { swal('Warning','This service is not available right now','warning')}} type="button" size="sm" color="danger">Delete</CButton> <CButton onClick={()=>{history.push({pathname: '/dashboard/employees/details',state: { employee: item }})}} size="sm" type="button" color="primary">Edit</CButton>
                                    </CBadge>
                                </td>
                            )
                        }}
                        />
                    </CCardBody>
                    <CCardFooter>
                        
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow>
        </CContainer>
        </>
    )
}

export default ScanHistory