import React from 'react'
import { CDropdown,CDropdownToggle,CDropdownItem,CDropdownMenu,CCard, CRow,CCol,CCardBody,CCardFooter,CCardHeader,CDataTable,CBadge,CButton } from '@coreui/react'
import { useHistory } from 'react-router-dom'
const Employees=()=>{
    let history = useHistory()
    const employeeList =[
        {id:1,Name:'Mr X',Email:'x@mail.com'},
        {id:2,Name: 'Mr Y',Email:'y@mail.com'}
    ]
    return(
        <>
        <CRow>
            <CCol md="12">
                <CCard>
                    <CCardHeader>
                        <h3>Employees</h3>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                        items={employeeList}
                        fields={[
                            { key: '#',_style: { width: '5%' }, _classes: 'font-weight-bold' },
                            'Name','Email','Assigned To','Assigned Date','Scans','Global Scans',{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
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
                                        <CButton onClick={() => { }} type="button" size="sm" color="danger">Delete</CButton> <CButton onClick={()=>{history.push({pathname: '/dashboard/employees/details',state: { employee: item }})}} size="sm" type="button" color="primary">Edit</CButton>
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
        </>
    )
}

export default Employees