import React from 'react'
import './Footer.css'

const Footer =()=>{
    return(
      
<footer className="row footer-gap">
    <div className="col-lg-4 col-md-4 text-center mobile-view">
<img className="img-fluid footer-images" src={"assets/images/accountability-badge-demo.webp"}/>
    </div>
    <div className="col-lg-4 col-md-4 text-center">
        <h4 className="footer-header">#Accountability</h4>
        <h5 class="footer-minor-details">Global Accountability Corp.</h5>
        <h5 class="footer-minor-details">P.O. Box 2308</h5>
        <h5 class="footer-minor-details">Missoula, MT. 59806</h5>
        <h5 class="footer-minor-details">888-63-BADGE (22343)</h5>

    </div>
    <div className='col-lg-4 col-md-4 text-center mobile-view'>
    <img className="img-fluid footer-images" src={"assets/images/safeid-demo.webp"}/>
    </div>
    <div className="col-lg-12"><p class="copyright-info">&copy;2021 by The Accountability Badge Corporation</p></div>
</footer>

    )
}

export default Footer