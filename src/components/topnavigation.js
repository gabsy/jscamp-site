import { Link } from "gatsby";
import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

const topNavigation = () => ( <nav className="top-navigation">
    <ul>
        <li>
        <button onClick={() => scrollTo('#speakers')}>Speakers</button> 
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
)

export default topNavigation;
