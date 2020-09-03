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
                    <h1><img src={logo} alt="JSCamp Romania 2020"></img></h1>
                    <div class="online-badge">VIRTUAL EDITION</div>
                    <div className="date-tagline">February 18-19, 2021</div>
                </div>
                
                <a href="http://46.101.199.230/form/index.php/welcome/form/JSC21/JSC21CONF" className="button">Register now!</a>
                <div className="registration-note">
                   Tickets available at <b>95 EUR</b>. 
                </div>
                
            </div>
            
        </div>

)

export default HomeHero