import { CCol, CRow, CProgress,CWidgetProgressIcon} from '@coreui/react';
import React from 'react';
import CIcon from '@coreui/icons-react'
import {API} from '../../config'

const Dashboard=()=>{
    const [count,setCount]=React.useState(0);
    
    React.useEffect(() => {
        console.log('dashboard mounted')
      },[count]);
    return(
        <>
        <CRow>
            <CCol sm="6" md="2">
                Dashboard
            </CCol>
        </CRow>

        </>
    )
}

export default Dashboard;