import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TOKEN } from '../../config'
import './Home.css'
import Header from '../header/header'


// import { from } from 'core-js/core/array'
const isLoggedIn = () => {
    if (localStorage.getItem(TOKEN) === null) {
        return false;
    }
    return true;
}
const Home = () => {
    // let history=useHistory()
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('home mounted')
    }, [count])
    return (
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
                                    <img src={'assets/images/police-cap.jpg'} srcSet="assets/images/police-cap.jpg 1x,assets/images/police-cap@2x.jpg 2x" alt="Hero Illustration" />
                                </div>
                            </div>
                        </div>
                        <div className="padding">
                            <div className="row margin-bottom max-width-l">
                                <div className="col-one-half middle">
                                    <h3>Emergency Contact One Scan Away</h3>
                                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="col-one-half">
                                    <img className="rounded shadow-l" src={'assets/images/KINEGRAM-Officer-ID.jpg'} srcSet="assets/images/KINEGRAM-Officer-ID.jpg 1x,assets/images/KINEGRAM-Officer-ID@2x.jpg 2x" alt="Keep Track" />
                                </div>
                            </div>
                            <div className="row max-width-l reverse-order">
                                <div className="col-one-half">
                                    <img className="rounded shadow-l" src={'assets/images/cusomer-review.jpg'} srcSet="assets/images/cusomer-review.jpg 1x, assets/images/cusomer-review@2x.jpg 2x" alt="Sketch" />
                                </div>
                                <div className="col-one-half middle">
                                    <h3>Civilian Review</h3>
                                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-light -margin-bottom-2 overlay padding">
                        <div className="center max-width-m">
                            <h2 className="second-text">Better Service Experience</h2>
                            <p className="paragraph second-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                        </div>
                        <div className="margin-top max-width-l center">
                            <img className="rounded shadow-l " src={'assets/images/better-service.jpg'} srcSet="assets/images/better-service.jpg 1x, assets/images/better-service@2x.jpg 2x" alt="Opalin Dashboard" />
                        </div>
                    </section>

                    <section className="bg-gradient-dark center dark padding">
                        <div className="margin-top max-width-l">
                            <div className="margin-bottom max-width-m">
                                <h3>Over 100 PDs </h3>
                                <p className="opacity-m paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="row min-two-columns">
                                <div className="col-one-fourth">
                                    <img src="assets/images/trusted-company-dark.png" srcSet="assets/images/trusted-company-dark.png 1x, assets/images/trusted-company-dark@2x.png 2x" alt="Trusted Company" />
                                </div>
                                <div className="col-one-fourth">
                                    <img src="assets/images/trusted-company-dark.png" srcSet="assets/images/trusted-company-dark.png 1x, assets/images/trusted-company-dark@2x.png 2x" alt="Trusted Company" />
                                </div>
                                <div className="col-one-fourth">
                                    <img src="assets/images/trusted-company-dark.png" srcSet="assets/images/trusted-company-dark.png 1x, assets/images/trusted-company-dark@2x.png 2x" alt="Trusted Company" />
                                </div>
                                <div className="col-one-fourth">
                                    <img src="assets/images/trusted-company-dark.png" srcSet="assets/images/trusted-company-dark.png 1x, assets/images/trusted-company-dark@2x.png 2x" alt="Trusted Company" />
                                </div>
                            </div>
                            {/* <img className="margin-top rounded shadow-l" src="assets/images/PDs.jpg" srcSet="assets/images/PDs.jpg 1x, assets/images/PDs@2x.jpg 2x" alt="Customers"/> */}
                        </div>
                    </section>

                    <section className="bg-light center">
                        <div className="row no-gutter">
                            <div className="col-one-half middle padding padding-bottom padding-top">
                                <div className="max-width-m">
                                    <p className="paragraph second-text">Danielle Mayer, business owner, says:</p>
                                    <h3 className="second-text">"Officer X was really helpful !"</h3>
                                </div>
                            </div>
                            <img className="col-one-half padding-bottom padding-top" src={'assets/images/bg/image-03@2x.jpg'} />


                        </div>
                    </section>

                    <section className="bg-gradient-light padding">
                        <div className="center max-width-l">
                            <h2 className="second-text">Easy Setup</h2>
                            <p className="paragraph second-text">At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
                        </div>
                        <div className="row margin-top max-width-l">
                            <div className="col-one-fourth card card-content">
                                <p className="muted">Step 1</p>
                                <h4>Step 1</h4>
                                <p className="paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="col-one-fourth card card-content">
                                <p className="muted">Step 2</p>
                                <h4>Step 2</h4>
                                <p className="paragraph">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur mollit.</p>
                            </div>
                            <div className="col-one-fourth card card-content">
                                <p className="muted">Step 3</p>
                                <h4>Step 3</h4>
                                <p className="paragraph">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="col-one-fourth card card-content dark">
                                <p className="muted">Step 4</p>
                                <h4>Done!</h4>
                                <p className="paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>
                        {/* <div className="center margin-top max-width-l">
                            <span className="muted">If you need any help, make sure to </span><a href="signup.html">book a demo</a><span className="muted">.</span>
                        </div> */}
                    </section>
                </main>

                <footer className="footer-main bg-gradient-cyan dark overlay-shape-06">
                    <div className="padding">

                        <div className="card card-content dark margin-bottom max-width-l">
                            <form className="row reduce-spacing">
                                <div className="col-two-thirds center-tablet middle">
                                    <h3 className="space-none">Ready to get started?</h3>
                                    
                                </div>
                                <div className="col-one-third middle">
                                    <Link to="/"className="button button-primary" role="button">Start Today !</Link>
                                </div>
                            </form>
                        </div>
                        <div className="row center-desktop max-width-l">
                            <div className="col-two-fifths">
                                <h6>SmartGuard ®</h6>
                               
                            </div>
                            <div className="col-one-fifth">
                                <h6>Info</h6>
                                <ul className="blank">
                                    <li><a href="#">Getting Started</a></li>
                                    <li><a href="#">Resources</a></li>
                                   
                                </ul>
                            </div>
                            <div className="col-one-fifth">
                                <h6>Support</h6>
                                <ul className="blank">
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Requirements</a></li>
                                    <li><a href="#">Updates</a></li>
                                    <li><a href="#">Contact</a></li>
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
