import React from "react"
import logoSymbol from "../images/logo-symbol.svg"

const Footer = () => (
  <footer className="footer">
      <div className="block">
            {/* <div className="logo-footer">
                <img src={logoSymbol}></img>
            </div> */}
            <div className="text-center">
                <a href="/" title="Get your Ticket!">Get your Ticket(s)!</a>
            </div>
            <div className="text-center">
                <a href="/" title="Become a Sponsor!">Become a Sponsor!</a>
            </div>
            <div className="text-center">
                 <a href="mailto:contact@jscamp.ro">contact@jscamp.ro</a>
            </div>
            <div className="copyright text-center">
            © {new Date().getFullYear()} <b>JSCamp Romania</b>. Built with <a href="https://www.gatsbyjs.org"><b>Gatsby</b></a>.
                Hosted on <a href="https://www.netlify.com"><b>Netlify</b></a>.
            </div>
      </div>      
    
</footer>

)

export default Footer
