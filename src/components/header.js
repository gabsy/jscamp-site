import React, { useState, useEffect } from "react"
import logoSymbol from "../images/logo-symbol-round.svg"
import {Link} from "gatsby"
import TopNavigation from "./topnavigation"

const Header = () => {

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
        <TopNavigation></TopNavigation>
    </header>
    )
}

export default Header
