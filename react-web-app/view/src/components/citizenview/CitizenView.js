import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import Officer from '../swipe/Officer';
const CitizenView = (props) => {
    let { officer_id } = useParams();
    React.useEffect(()=>{
        console.log('officer id',props.match.params.id)
    },[props.match.params.id])
    return(
        <>
        <div>{props.match.params.id}</div>
        <Officer officer_id={props.match.params.id}/>
        </>
    )
}

export default CitizenView