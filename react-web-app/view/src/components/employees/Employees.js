import React, { useState } from 'react'
import { CCard, CRow,CCol,CCardBody,CCardFooter,CCardHeader,CDataTable,CBadge,CButton } from '@coreui/react'
import { useHistory } from 'react-router-dom'
import { PUBLIC_API } from 'src/config'
import swal from 'sweetalert'
const Employees=()=>{
    let history = useHistory()
    const [empList,setEmpList]=useState([])
    
    React.useEffect(()=>{
        PUBLIC_API.get('employee/list/').then((res)=>{
            console.log('empl list ---- ',res.data)
            if(res.data.success == "True"){
                var data=[];
                for (let index = 0; index < res.data.data.length; index++) {
                    const element = res.data.data[index];
                    data.push({'#':index+1,id:element.id,"Name":element.first_name+' '+element.last_name,"Email":element.email,"Phone":element.phone, "Assigned To":'',"Assigned Date":'',"Scans":'',"Global Scans":""});
                }
                setEmpList(data);
            }
        }).catch((err)=>{
            console.log(err.response)
        })
    },[])
    return(
        <>
        <CRow>
            <CCol>
                <CButton onClick={()=>{history.push('/dashboard/employees/create')}} color="primary" type="button">Add</CButton>
            </CCol>
        </CRow>
        <hr/>
        <CRow>
            <CCol md="12">
                <CCard>
                    <CCardHeader>
                        <h3>Employees</h3>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                        items={empList}
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
        </>
    )
}

export default Employees