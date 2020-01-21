import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import logo from "../images/logo.svg"
import heroillustration from "../images/hero-illustration.svg"
import scrollTo from 'gatsby-plugin-smoothscroll';


const HomeHero = () => {
    return (
        <>
        <div className="hero-home">
            <div>
                <div class="full-soon">
                    * Full website coming soon *
                </div>
                <div className="logo">
                    <h1><img src={logo} alt="JSCamp Romania 2020"></img></h1>
                    <div className="date-tagline">September 21, 2020, <b>BUCHAREST</b></div>
                </div>
                <button className="button" onClick={() => scrollTo('#speakers')}>Register now!</button>
                <div className="registration-note">
                Only 50 Early-Bird tickets available at 129 EUR. 
                </div>
                <div className="background-illustration">
                    <img src={heroillustration} alt="JSCamp Romania"></img>
                </div>
            </div>
        </div>
        </>
    )
    
}


export default HomeHero