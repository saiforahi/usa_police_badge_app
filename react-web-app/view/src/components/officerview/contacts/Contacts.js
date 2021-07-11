import React from 'react'
import swal from 'sweetalert'

const MyBadge = ()=>{
    React.useEffect(()=>{
        swal('Sorry!','This service is under development','warning')
    },[])
    return(
        <>
        </>
    )
}

export default MyBadge