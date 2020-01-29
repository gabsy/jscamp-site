import React from "react"
import logoHeader from "../images/logo-header.svg"
// import logoFB from "../images/icon-facebook.svg"
// import logoTwitter from "../images/icon-twitter.svg"
import TopNavigation from "../components/topnavigation"

const Header = () => (
  <header className="header">
        <div className="logo-header">
                {/* <img src={logoHeader} alt="JSCamp Romania"></img> */}
                <div className="full-soon">
                    * Full website coming soon *
                </div>
        </div>
        {/* <div className="social-icons text-right">
            <a href="https://www.facebook.com/JscRomania"><img src={logoFB} alt="Follow us on Facebook"></img></a>
            <a href="https://www.twitter.com/jscampro"><img src={logoTwitter} alt="Follow us on Twitter"></img></a>
        </div> */}
        <TopNavigation></TopNavigation>
      
    
</header>

)

export default Header
