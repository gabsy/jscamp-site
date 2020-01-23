import React from "react"
import logoFB from "../images/icon-facebook.svg"
import logoTwitter from "../images/icon-twitter.svg"

const Footer = () => (
  <footer className="footer">
      <div className="social-icons text-center">
        <a href="https://www.facebook.com/JscRomania"><img src={logoFB} alt="Follow us on Facebook"></img></a>
        <a href="https://www.twitter.com/jscampro"><img src={logoTwitter} alt="Follow us on Twitter"></img></a>
     </div>
      <div className="block">
            <div className="text-center">
                <a href="/" title="Get your Ticket!">Get your Ticket(s)!</a>
            </div>
            <div className="text-center">
                <a href="/" title="Become a Sponsor!">Become a Sponsor!</a>
            </div>
            <div className="text-center">
                 <a href="mailto:contact@jscamp.ro">contact@jscamp.ro</a>
            </div>
      </div>   
      <div className="copyright text-center">
            © {new Date().getFullYear()} <b>JSCamp Romania</b>. Built with <a href="https://www.gatsbyjs.org"><b>Gatsby</b></a>.
                Hosted on <a href="https://www.netlify.com"><b>Netlify</b></a>.
        </div>   
    
</footer>

)

export default Footer
