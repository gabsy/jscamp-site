import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import logo from "../images/logo.svg"

const HomeHero = () => {
    return (
        <>
        <div className="hero-home">
            <div className="logo">
                <img src={logo} alt="JSCamp Romania"></img>
            </div>
        </div>
        
        <div className="grid-3_xs-1">
            <div className="col">...</div>
            <div className="col">...</div>
            <div className="col">...</div>
            <div className="col">...</div>
            <div className="col">...</div>
            <div className="col">...</div>
            <div className="col">...</div>
            <div className="col">...</div>
            <div className="col">...</div>
        </div>
        </>
    )
    
}


export default HomeHero