import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

const TopNavigation = () => {

        // window.onload = (event) => {
        //     console.log('win load ' + pageClass)
        // };


    const [pageClass, setPageClass] = useState();

    useEffect(() => {
        const handlePageClass = () => {
            let pageClassChange = document.body.className;
            // if(pageClassChange !== pageClass) {
                setPageClass(pageClassChange);
            // }
        };

        document.onload = handlePageClass();
        // document.addEventListener('DOMContentLoaded', handlePageClass);

        return () => {
        // clean up the event handler when the component unmounts
            // document.removeEventListener('load', handlePageClass);
        };

    }, [pageClass]);


    // const [scrolled, setScrolled] = useState(false);

    // // change state on scroll
    // useEffect(() => {
    //     const handleScroll = () => {
    //     const isScrolled = window.scrollY > 10;
    //     if (isScrolled !== scrolled) {
    //         setScrolled(!scrolled);
    //     }
    //     };

    //     document.addEventListener('scroll', handleScroll, { passive: true });

    //     return () => {
    //     // clean up the event handler when the component unmounts
    //     document.removeEventListener('scroll', handleScroll);
    //     };
    // }, [scrolled]);
    
    console.log('before render ' + pageClass)
    return ( 
    <nav className="top-navigation">
        <ul>
            <li>
            {/* {pageClass} */}
            {/* {pageClass === "homepage" ? <button onClick={() => scrollTo('#speakers')}>Speakers</button> : <button onClick={() => scrollTo('#speakers')}>No Speakers</button>} */}
            {pageClass === "homepage" ? <button onClick={() => scrollTo('#speakers')}>Speakers</button> : <Link to="/#speakers">No Speakers</Link>}
            
            {/* <button onClick={() => scrollTo('#speakers')}>Speakers</button>  */}
            </li>
            <li>
                <button onClick={() => scrollTo('#workshops')}>Workshops</button> 
            </li>
            <li>
                <button onClick={() => scrollTo('#venue')}>Venue</button> 
            </li>
            <li>
                <button onClick={() => scrollTo('#sponsors')}>Sponsors</button> 
            </li>
            <li>
                <a href="http://46.101.199.230/form/index.php/welcome/form/JSC20/JSC20CONF" className="tickets">Tickets</a>
            </li>
        </ul>
    </nav>
)}

export default TopNavigation;
