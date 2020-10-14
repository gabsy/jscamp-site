import { Link } from "gatsby"
import React from "react"
import ScrollTo from 'gatsby-plugin-smoothscroll'
import { globalHistory as history } from '@reach/router'



const TopNavigation = () => {
    const { location } = history

    return ( 
    <nav className="top-navigation">
        <ul>
            <li>
                {location.pathname === "/" ? <button onClick={() => ScrollTo('#speakers')}>Speakers</button> : <Link to="/#speakers">Speakers</Link>}
            </li>
            {/* <li>
                <Link to="/speakers">Speakers</Link>
            </li> */}
            {/* <li>
                {location.pathname === "/" ? <button onClick={() => ScrollTo('#workshops')}>Workshops</button> : <Link to="/#workshops">Workshops</Link>}
            </li> */}
            {/* <li>
                {location.pathname === "/" ? <button onClick={() => ScrollTo('#venue')}>Venue</button> : <Link to="/#venue">Venue</Link>}
            </li> */}
            <li>
                {location.pathname === "/" ? <button onClick={() => ScrollTo('#sponsors')}>Sponsors</button> : <Link to="/#sponsors">Sponsors</Link>}
            </li>
            <li>
                <Link to="http://46.101.199.230/form/index.php/welcome/form/JSC21/JSC21CONF" className="tickets">Tickets</Link>
            </li>
            {/* <li>
            <Link to="/ticketsdraft">Tickets</Link>
            </li> */}
            
        </ul>
    </nav>
)}

export default TopNavigation;
