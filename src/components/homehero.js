import React from "react"
import logo from "../images/logo.svg"
import confirmedImg from "../images/confirmed.svg"
// import heroillustration from "../images/hero-illustration.svg"
import scrollTo from 'gatsby-plugin-smoothscroll';


const HomeHero = () => {
    return (
        <>
        <div className="hero-home" id="hero-home">
            <div className="background-illustration">
                {/* <img src={heroillustration} alt="JSCamp Romania"></img> */}
            </div>
            <div className="inner-container">
                {/* <div className="full-soon">
                    * Full website coming soon *
                </div> */}
                <div className="logo">
                    <h1><img src={logo} alt="JSCamp Romania 2020"></img></h1>
                    <div className="date-tagline">September 21, 2020, <b>BUCHAREST</b></div>
                </div>
                
                <a href="http://46.101.199.230/form/index.php/welcome/form/JSC20/JSC20CONF" className="button">Register now!</a>
                <div className="registration-note">
                    50 Early-Bird tickets available at <b>129 EUR</b>. 
                </div>
                
            </div>
            <button className="confirmed" onClick={() => scrollTo('#speakers')}><img src={confirmedImg} alt="Confrimed Speakers"></img></button> 
        </div>
        </>
    )
    
}

export default HomeHero