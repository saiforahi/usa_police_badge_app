import React from 'react'
import {
    CModal,
    CModalHeader,
    CModalBody,CModalFooter,CButton
  } from '@coreui/react'
const Rating = (props)=>{
    const [modal, setModal] = React.useState(props.show);
    const toggle = ()=>{
        setModal(!modal);
    }
    React.useEffect(()=>{
        console.log('props',props)
    },[modal])
    return(
        <>
        <CModal show={modal} onClose={toggle} centered>
        <CModalHeader closeButton>Modal title</CModalHeader>
        <CModalBody>
          Lorem ipsum dolor...
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Do Something</CButton>{' '}
          <CButton
            color="secondary"
            onClick={toggle}
          >Cancel</CButton>
        </CModalFooter>
      </CModal>
        </>
    )
}

export default Rating