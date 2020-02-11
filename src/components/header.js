import React from "react"
import logoHeader from "../images/logo-header.svg"
import logoSymbol from "../images/logo-symbol-round.svg"
import {Link} from "gatsby"
import TopNavigation from "./topnavigation"

const Header = () => (
  <header className="header">
        <div className="logo-header">
            <h1><Link to="/"><img src={logoSymbol} alt="JSCamp Romania"></img></Link></h1>
        </div>
        <TopNavigation></TopNavigation>
</header>

)

export default Header
