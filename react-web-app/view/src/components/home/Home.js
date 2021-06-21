import React from 'react'
import { Link } from "react-router-dom";
const Home =()=>{
    return(
        <div>
            <header className="App-header">
                <p>
                Home
                </p>
                <Link to="/dashboard">Dashboard</Link>
            </header>
        </div>
    )
}

export default Home