import React from 'react'

const Dashboard =()=>{
    React.useEffect(()=>{
        console.log('dashboard component mounted')
    },[])
    return(
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard