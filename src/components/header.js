import React, { useState, useEffect } from "react"
import logoSymbol from "../images/logo-symbol-round.svg"
import logoFB from "../images/icon-facebook.svg"
import logoTwitter from "../images/icon-twitter.svg"
import logoYouTube from "../images/icon-youtube.svg"
import {Link} from "gatsby"
import TopNavigation from "./topnavigation"

const Header = () => {

    var style1 = {
        textAlign: 'right',
      };

    const [scrolled, setScrolled] = useState(false);

    // change state on scroll
    useEffect(() => {
    const handleScroll = () => {
        const isScrolled = window.scrollY > window.innerHeight - 89;
        if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
        }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        // clean up the event handler when the component unmounts
        document.removeEventListener('scroll', handleScroll);
    };
    }, [scrolled]);
    return (
    <header className="header" data-active={scrolled}>
        <div className="logo-header">
            <h1><Link to="/"><img src={logoSymbol} alt="JSCamp Romania"></img></Link></h1>
        </div>
        {/* <TopNavigation></TopNavigation> */}
        <div className="social-icons" style={style1}>
            <a href="https://www.facebook.com/JscRomania"><img src={logoFB} alt="Follow us on Facebook"></img></a>
            <a href="https://www.twitter.com/jscampro"><img src={logoTwitter} alt="Follow us on Twitter"></img></a>
            <a href="https://www.youtube.com/watch?v=wsdPeC86OH0&list=PLbUMlIAqtRWPlOwcrOakwcj6DgKTrWFQq"><img src={logoYouTube} alt="Watch Our Videos"></img></a>
        </div>
    </header>
    )
}

export default Header
