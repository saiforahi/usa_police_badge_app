import { CContainer,CValidFeedback,CLabel,CSelect,CFormGroup,CForm,CInput ,CNav, CNavItem, CNavLink, CTabPane, CTabs, CCard, CCardBody, CCardHeader, CButton, CDataTable, CBadge, CCol, CRow, CTabContent, CTextarea } from '@coreui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { PUBLIC_API } from 'src/config'
import { fetchDepartmentsThunk } from 'src/store/slices/DepartmentSlice'
import swal from 'sweetalert'

const Departments = () => {
    let history = useHistory()
    const [currentTab,setCurrentTab]=useState('view')
    const [name,setName]=useState('')
    const [supervisor,setSupervisor]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const departments = useSelector(state => {
        let data = []
        Array.from(state.departments.data).forEach((item, index) => {
            data.push({ '#': index + 1, 'Name': item.department_name, 'Supervisor': item.supervisor_name, 'Email': item.email, 'Phone': item.phone, 'Address': item.address })
        })
        return data
    })
    const officers = useSelector(state => state.employees.data)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchDepartmentsThunk())
    }, [])
    function add_department(){
        console.log('ee')
        var formData = new FormData()
        formData.append('department_name',name)
        formData.append('supervisor_name',supervisor)
        formData.append('email',email)
        formData.append('phone',phone)
        formData.append('address',address)
        PUBLIC_API.post('department/add/',formData).then((res)=>{
            if(res.data.success == 'True'){
                swal('Created!',name+' department has been created','success').then(()=>{
                    history.push('/dashboard/departments')
                })
            }
        })
    }
    return (
        <>
            <CContainer>
                <CTabs variant="tabs" activeTab="view">
                    <CNav className="tab-style">
                        <CNavItem>
                            <CNavLink data-tab="view" className="special">Departments</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink data-tab="add" className="special">Add Department</CNavLink>
                        </CNavItem>
                    </CNav>
                    <CTabContent>
                        <CTabPane data-tab="view">
                            <CRow>
                                <CCol md="12">
                                    <CCard className="mt-3" style={{ border: "none" }}>
                                        <CCardBody>
                                            <CDataTable
                                                items={departments}
                                                fields={[
                                                    {
                                                        key: "#",
                                                        _style: { width: "5%" },
                                                        _classes: "font-weight-bold",
                                                    },
                                                    "Name",
                                                    "Supervisor",
                                                    "Email",
                                                    "Phone",
                                                    "Address",

                                                    {
                                                        key: "Action",
                                                        label: "",
                                                        _style: { maxWidth: "5%" },
                                                        sorter: true,
                                                        filter: true,
                                                    },
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
                                                scopedSlots={{
                                                    Action: (item) => (
                                                        <td>
                                                            <CBadge>
                                                                <CButton
                                                                    onClick={() => { }}
                                                                    type="button"
                                                                    size="sm"
                                                                    color="danger"
                                                                >
                                                                    Delete
                                                                </CButton>{" "}
                                                                <CButton
                                                                    size="sm"
                                                                    type="button"
                                                                    color="primary"
                                                                    onClick={() => { }}
                                                                >
                                                                    Edit
                                                                </CButton>
                                                            </CBadge>
                                                        </td>
                                                    ),
                                                }}
                                            />
                                        </CCardBody>
                                    </CCard>
                                </CCol>
                            </CRow>
                        </CTabPane>
                    </CTabContent>
                    <CTabContent>
                        <CTabPane data-tab="add">
                            <CRow className="justify-content-center" style={{ border: 'none' }}>
                                <CCol style={{ border: 'none' }}>
                                    <CCard style={{ border: 'none' }}>
                                        <h4 className="table-header text-center">Add new department</h4>
                                        <CForm action="" method="post">
                                            <CRow className="justify-content-center">
                                                {/**Name */}
                                                <CCol md="8" sm="12" xs="12">
                                                    <CFormGroup>
                                                        <CLabel
                                                            htmlFor="name"
                                                            className="custom-label"
                                                        >
                                                            Department Name
                                                        </CLabel>
                                                        <CInput id="name" value={name} onChange={(event) => setName(event.target.value)} />
                                                        <CValidFeedback>Cool! Input is valid</CValidFeedback>
                                                    </CFormGroup>
                                                </CCol>
                                                {/**supervisor */}
                                                <CCol md="8" sm="12" xs="12">
                                                    <CFormGroup>
                                                        <CLabel
                                                            htmlFor="phone"
                                                            className="custom-label"
                                                        >
                                                            Supervisor
                                                        </CLabel>
                                                        <CSelect value={supervisor} onChange={(event) => setPhone(event.target.value)}>
                                                            {officers!=undefined && Array.from(officers).map((officer)=>(<option key={officer.id} value={officer.first_name+' '+officer.last_name}>{officer.first_name+' '+officer.last_name}</option>))}
                                                        </CSelect>
                                                        <CValidFeedback>Cool! Input is valid</CValidFeedback>
                                                    </CFormGroup>
                                                </CCol>
                                                {/**Phone */}
                                                <CCol md="8" sm="12" xs="12">
                                                    <CFormGroup>
                                                        <CLabel
                                                            htmlFor="phone"
                                                            className="custom-label"
                                                        >
                                                            Phone
                                                        </CLabel>
                                                        <CInput id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                                                        <CValidFeedback>Cool! Input is valid</CValidFeedback>
                                                    </CFormGroup>
                                                </CCol>
                                                {/**email */}
                                                <CCol md="8" sm="12" xs="12">
                                                    <CFormGroup>
                                                        <CLabel
                                                            htmlFor="email"
                                                            className="custom-label"
                                                        >
                                                            Email
                                                        </CLabel>
                                                        <CInput id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                                        <CValidFeedback>Cool! Input is valid</CValidFeedback>
                                                    </CFormGroup>
                                                </CCol>
                                                {/**address */}
                                                <CCol md="8" sm="12" xs="12">
                                                    <CFormGroup>
                                                        <CLabel
                                                            htmlFor="address"
                                                            className="custom-label"
                                                        >
                                                            Address
                                                        </CLabel>
                                                        <CTextarea maxLength={9} id="address" value={address} onChange={(event) => setAddress(event.target.value)} />
                                                        <CValidFeedback>Cool! Input is valid</CValidFeedback>
                                                    </CFormGroup>
                                                </CCol>
                                                {/**submit button */}
                                                <CCol md="10" sm="12" xs="12" className="text-center">
                                                    <CButton
                                                        color="primary"
                                                        className="button-primary px-4 mt-3"
                                                        type="button"
                                                        onClick={()=>{add_department()}}
                                                    >
                                                        Add Department
                                                    </CButton>
                                                </CCol>
                                            </CRow>
                                        </CForm>
                                    </CCard>
                                </CCol>
                            </CRow>
                        </CTabPane>
                    </CTabContent>
                </CTabs>
            </CContainer>
        </>
    )
}

export default Departments