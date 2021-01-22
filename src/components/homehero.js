import React from "react"
import logo from "../images/logo.svg"
// import confirmedImg from "../images/confirmed.svg"
// import heroillustration from "../images/hero-illustration.svg"
// import scrollTo from 'gatsby-plugin-smoothscroll';


const HomeHero = () => (

        <div className="hero-home" id="hero-home">
            <div className="background-illustration">
            </div>
            <div className="inner-container">
                <div className="logo">
                    <h1><img src={logo} alt="JSCamp Romania"></img></h1>
                    {/* <div className="online-badge">VIRTUAL EDITION</div>
                    <div className="date-tagline">February 18-19, 2021</div> */}
                    <div className="date-tagline">
                       <p>We are very sorry but for the time being, due to the ongoing pandemic, we decided to postpone the event until the situation will allows us to meet again at a live JSCamp Romania edition.</p> 
                       <h3>Stay safe and keep on coding!</h3>
                    </div>
                </div>
                
                {/* <a href="http://46.101.199.230/form/index.php/welcome/form/JSC21/JSC21CONF" className="button">Register now!</a>
                <div className="registration-note">
                   Tickets available at <b>95 EUR</b>. 
                </div> */}
                
            </div>
            
        </div>

)

export default HomeHero