import React from "react"
import comunicate from "../images/sponsors/media-partners/comunicatedepresa.png"
import jsgirls from "../images/sponsors/media-partners/jsgirls.png"
import jsleague from "../images/sponsors/media-partners/jsleague.png"
import nrcc from "../images/sponsors/media-partners/nrcc.png"
import softlead from "../images/sponsors/media-partners/softlead.png"
import techcafe from "../images/sponsors/media-partners/techcafe.png"
import adobe from "../images/sponsors/adobe.png"

const Sponsors = () => {
    return (
        <section className="sponsors" id="sponsors">
            <h2>Our Sponsors</h2>
            <div className="block">
                <h3>GOLD SPONOSORS</h3>
                <div className="sponsors-list">
                    <div><a href="https://www.adobe.com/"><img src={adobe} alt="Adobe" width="110"></img></a></div>
                </div>
               <br></br>
                <h3>MEDIA PARTNERS</h3>
                <div className="media-partners-list">
                    <div><a href="https://www.comunicatedepresa.ro/"><img src={comunicate} alt="Comunicate de presa" width="150"></img></a></div>
                    <div><a href="https://jsgirls.ro/"><img src={jsgirls} alt="JS Girls" width="80"></img></a></div>
                    <div><a href="https://jsleague.ro/"><img src={jsleague} alt="JS League" width="80"></img></a></div>
                    <div><a href="https://nrcc.ro/"><img src={nrcc} alt="NRCC" width="100"></img></a></div>
                    <div><a href="https://softlead.ro/"><img src={softlead} alt="Softlead" width="100"></img></a></div>
                    <div><a href="https://techcafe.ro/"><img src={techcafe} alt="TechCafe" width="100"></img></a></div>
                </div>
                <p>Interested in sponsoring the 6th edition of JScamp in 2020? <b>Let's talk!</b></p>
                <a href="mailto:sponsors@jscamp.ro?subject=Sponsorship 2020" className="button">Become a 2020 Sponsor!</a>
            </div>
        </section>
    )
}

export default Sponsors