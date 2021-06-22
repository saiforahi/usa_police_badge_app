import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {TOKEN} from '../../config'
import './Home.css'
import Header from '../header/header'


// import { from } from 'core-js/core/array'
const isLoggedIn=()=>{
    if(localStorage.getItem(TOKEN)===null){
      return false;
    }
    return true;
}
const Home=()=>{
    // let history=useHistory()
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('home mounted')
    },[count])
    return(
        <>
        <div>
          
<Header></Header>
            <main>
                <section className="bg-image-hero center-tablet dark overlay-hero">
                    <div className="full-screen -margin-bottom middle padding padding-top-tablet">
                        <div className="row max-width-l">
                            <div className="col-one-half middle">
                                <div>
                                    <h1 className="hero">SmartGuard</h1>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <Link to="/login" className="button button-primary space-top" role="button" >Get Started</Link>
                                </div>
                            </div>
                            <div className="col-one-half middle">
                                <img src={'assets/images/police-cap.jpg'} srcSet="assets/images/police-cap.jpg 1x,assets/images/police-cap@2x.jpg 2x" alt="Hero Illustration"/>
                            </div>
                        </div>
                    </div>
                    <div className="padding">
                        <div className="row margin-bottom max-width-l">
                            <div className="col-one-half middle">
                                <h3>Custom Framework</h3>
                                <p className="paragraph">Everything is neatly organized in Sass and has been heavily focused on performances.</p>
                            </div>
                            <div className="col-one-half">
                                <img className="rounded shadow-l" src="./Opalin HTML Template_files/editor.png" srcSet="media/content/editor.png 1x, media/content/editor@2x.png 2x" alt="Editor"/>
                            </div>
                        </div>
                        <div className="row max-width-l reverse-order">
                            <div className="col-one-half">
                                <img className="rounded shadow-l" src="./Opalin HTML Template_files/sketch.png" srcSet="media/content/sketch.png 1x, media/content/sketch@2x.png 2x" alt="Sketch"/>
                            </div>
                            <div className="col-one-half middle">
                                <h3>Designed In Sketch</h3>
                                <p className="paragraph">100% of this HTML template, including all modules and components have been designed in Sketch.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-light -margin-bottom-2 overlay padding">
                    <div className="center max-width-m">
                        <h2>Present Your Product</h2>
                        <p className="paragraph">Opalin helps you present your business in a wide variety of ways. Display full-width images, divide content in a single or multiple columns, anything to make your product or service stand out!</p>
                    </div>
                    <div className="margin-top max-width-l">
                        <img className="rounded shadow-l" src="./Opalin HTML Template_files/opalin-dashboard.png" srcSet="media/content/opalin-dashboard.png 1x, media/content/opalin-dashboard@2x.png 2x" alt="Opalin Dashboard"/>
                    </div>
                </section>
            </main>

            <footer className="footer-main bg-gradient-primary dark overlay-shape-06">
                <div className="padding">
                <div className="center margin-bottom max-width-m">
                    <h3>Grow your startup the right way.</h3>
                    <p className="paragraph">Our tools are packed with epic features. So you can focus on your most important work.</p>
                </div>
                <div className="center margin-bottom max-width-l">
                    <div className="row margin-bottom min-two-columns">
                    <div className="col-one-fourth">
                        <i className="feature-icons material-icons bg-gradient-pink">format_shapes</i>
                        <h6>Minimal Design</h6>
                    </div>
                    <div className="col-one-fourth">
                        <i className="feature-icons material-icons bg-gradient-cyan">network_check</i>
                        <h6>Rocket Fast</h6>
                    </div>
                    <div className="col-one-fourth">
                        <i className="feature-icons material-icons bg-gradient-green">line_style</i>
                        <h6>Framework</h6>
                    </div>
                    <div className="col-one-fourth">
                        <i className="feature-icons material-icons bg-gradient-indigo">check</i>
                        <h6>HTML5 Valid</h6>
                    </div>
                    </div>
                </div>
                <div className="card card-content dark margin-bottom max-width-l">
                    <form className="row reduce-spacing">
                    <div className="col-two-thirds center-tablet middle">
                        <h3 className="space-none">Ready to get started?</h3>
                        <p className="paragraph">Start your free 15-day trial today.</p>
                    </div>
                    <div className="col-one-third middle">
                        <a href="https://preview.uiuxassets.com/opalin/signup.html" className="button button-primary" role="button">Create An Account</a>
                    </div>
                    </form>
                </div>
                <div className="row center-desktop max-width-l">
                    <div className="col-two-fifths">
                    <h6>Opalin ®</h6>
                    <p>We're a completely remote company, working across twenty countries with over 20,000 customers.</p>
                    </div>
                    <div className="col-one-fifth">
                    <h6>Info</h6>
                    <ul className="blank">
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Getting Started</a></li>
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Resources</a></li>
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Design</a></li>
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Tutorials</a></li>
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Pricing</a></li>
                    </ul>
                    </div>
                    <div className="col-one-fifth">
                    <h6>Support</h6>
                    <ul className="blank">
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Documentation</a></li>
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Requirements</a></li>
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">License</a></li>
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Updates</a></li>
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Contact</a></li>
                    </ul>
                    </div>
                    <div className="col-one-fifth">
                    <h6>Connect</h6>
                    <ul className="blank">
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Twitter</a></li>
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Facebook</a></li>
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Instagram</a></li>
                        <li><a href="https://preview.uiuxassets.com/opalin/?storefront=envato-elements#">Medium</a></li>
                    </ul>
                    </div>
                </div>
                </div>
              
            </footer>
            </div>
        </>
    )
}
export default Home;
