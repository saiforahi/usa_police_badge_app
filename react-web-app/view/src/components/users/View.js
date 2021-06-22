import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow,CButton,CBadge } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { API } from 'src/config';
import swal from 'sweetalert'
const View=()=>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        API.get('/users/all').then(response=>{
            console.log(response.data)
            var data=[]
            for (let index = 0; index < response.data.users.length; index++) {
                const element = response.data.users[index];
                data.push({'#':index+1,id:element.id,"Name":element.name,"Email":element.email,"Phone":element.phone});
            }
            setUsers(data);
        })
    },[])
    const delete_user=(id)=>{
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this  record!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            API.delete('/users/'+id).then(response=>{
              if(response.data.status===true){
                const data=Array.from(users);
                for(let index=0;index<data.length;index++){
                  if(data[index].id==id){
                    data.splice(index,1);
                    break;
                  }
                }
                setUsers(data);
                swal("Deleted!","Your selected record has been deleted!", {
                  icon: "success",
                });
                
              }
              else if(response.data.success==false){
                swal("Poof!"+response.data.message, {
                  icon: "error",
                });
              }
              
            }).catch(error=>{
              //swal("Failed!",error,"error");
            })
          }
        });
    }
    return(
        <>
        <CRow className="align-items-center">
        <CCol col="2" className="mb-3 mb-xl-0">
            <Link to="/dashboard/users/create"><CButton shape="round" color="primary">Create</CButton></Link>
        </CCol>
        </CRow>
        <hr></hr>
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <h3>Users</h3>
                    </CCardHeader>
                    <CCardBody>
                    <CDataTable
                        items={users}
                        fields={[
                            { key: '#',_style: { width: '5%' }, _classes: 'font-weight-bold' },
                            'Role','Name','Email','Phone',{key:'Action',label:'',_style: { width: '12%' },sorter:false,filter:false}
                        ]}
                        light
                        hover
                        striped
                        bordered
                        sorter
                        columnFilter
                        size="sm"
                        itemsPerPage={10}
                        pagination
                        scopedSlots = {{
                            'Action':
                            (item)=>(
                                <td>
                                <CBadge>
                                    <CButton onClick={()=>delete_user(item.id)} type="button" size="sm" color="danger">Delete</CButton> <CButton size="sm" type="button" color="primary">Edit</CButton>
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
export default View