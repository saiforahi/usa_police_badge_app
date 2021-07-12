import React from 'react'
import {
    CContainer,
    CCardHeader,CCardBody,CCard,CBadge,CButton,CCardFooter,CDataTable,CRow,CCol
  } from '@coreui/react'
import { useSelector } from 'react-redux'
import swal from '@sweetalert/with-react'
import CardSwipped from '../swipe/CardSwipped'
import { useHistory } from 'react-router'
const ScanHistory =()=>{
    let history = useHistory()
    const scans = useSelector(state => {
        let data =[]
        Array.from(state.notifications.data).forEach((item,index)=>{
            data.push({"#":index+1,'user_id':item.nfc.user.id,"Badge Number":item.nfc.nfc_number,"Assigned To":item.nfc.user.first_name+' '+item.nfc.user.last_name,"Assigned Date":new Date(item.nfc.created_at).toLocaleDateString(),'Time & Date':new Date(item.created_at).toLocaleTimeString()+' - '+new Date(item.created_at).toLocaleDateString()})
        })
        return data
    })
    function show_scan_modal(data){
        swal({
          content:(<CardSwipped data={data}/>),
          buttons : [false,'Close']
        })
      }
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
                            'Badge Number','Assigned To','Assigned Date','Scans','Global Scans',{ key: 'Time & Date',_style: { width: '25%' }},{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
                                        <CButton onClick={()=>{show_scan_modal(item)}} size="sm" type="button" color="primary">View detail</CButton>
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