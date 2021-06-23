import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import './badges.css'
import {CIcon} from '@coreui/icons-react';
import { CCard,CRow,CCol,CCardBody,CCardFooter,CCardHeader,CDataTable,CBadge,CButton } from '@coreui/react'
// function SimpleDialog(props) {
   
//     const { onClose, selectedValue, open } = props;
  
//     const handleClose = () => {
//       onClose(selectedValue);
//     };
// }
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
                            'Badge Number','Created Date','Assigned To','Scans','Global Scans',{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
            <CCol md="12">
            <div class="dropdown">
 <CButton type="button" className="button-primary float-right" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
 
Add New <CIcon name="cil-plus" size="xl"></CIcon>
 </CButton>
 <div class="dropdown-menu mt-2" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Buy New</button>
    <div class="dropdown-divider"></div>
    <button class="dropdown-item" type="button" >Use Existing</button>
    
  </div>
 </div>
            </CCol>
        </CRow>
        </>
    )
}

export default Badges