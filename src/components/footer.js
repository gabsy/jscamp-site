import React from "react"
import logoFB from "../images/icon-facebook.svg"
import logoTwitter from "../images/icon-twitter.svg"
import logoYouTube from "../images/icon-youtube.svg"
import {Link} from "gatsby"

const Footer = () => (
  <footer className="footer text-center">
      <div className="social-icons ">
        <a href="https://www.facebook.com/JscRomania"><img src={logoFB} alt="Follow us on Facebook"></img></a>
        <a href="https://www.twitter.com/jscampro"><img src={logoTwitter} alt="Follow us on Twitter"></img></a>
        <a href="https://www.youtube.com/watch?v=wsdPeC86OH0&list=PLbUMlIAqtRWPlOwcrOakwcj6DgKTrWFQq"><img src={logoYouTube} alt="Watch Our Videos"></img></a>
     </div>
      <div className="block">
          <div className="footer-inner">
                <div className="text-center">
                    <a href="http://46.101.199.230/form/index.php/welcome/form/JSC20/JSC20CONF" title="Get your Ticket!">Get your Ticket(s)!</a>
                </div>
                <div>
                    <a href="mailto:sponsors@jscamp.ro?subject=Sponsorship JSCamp 2020" title="Become a Sponsor!">Become a Sponsor!</a>
                </div>
                <div>
                    <a href="mailto:office@evensys.ro?subject=JSCamp 2020 Website Contact">office@evensys.ro</a>
                </div>
          </div>
          <div className="terms">
            <Link to="/code-of-conduct">Code of Conduct</Link><Link to="/terms-conditions">Terms &amp; Conditions</Link><Link to="/privacy-policy">Privacy Policy</Link><br></br>
          </div> 
          <div className="copyright">
                © {new Date().getFullYear()} <b>JSCamp Romania</b>. Organized by <a href="http://gabischiopu.com"><b>Gabi Schiopu</b></a> and <a href="https://www.evensys.ro"><b>Evensys</b></a>
                <br></br>Built with <a href="https://www.gatsbyjs.org"><b>Gatsby</b></a>.Hosted on <a href="https://www.netlify.com"><b>Netlify</b></a>.
          </div>
      </div>
  
</footer>

)

export default Footer
