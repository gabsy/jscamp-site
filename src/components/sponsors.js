import React from "react"
import endava from "../images/past_sponsors/endava.png"
import kambi from "../images/past_sponsors/kambi.png"
import softvision from "../images/past_sponsors/softvision.png"
import uipath from "../images/past_sponsors/uipath.png"

const Sponsors = () => {
    return (
        <section className="sponsors" id="sponsors">
            <h2>Past Sponsors</h2>
            <div className="block">
                <p>Here are some of the sponsors that helped us along the way. <br></br>Interested in sponsoring the 6th edition of JScamp in 2020? <b><a href="mailto:contact@jscamp.ro?subject=Sponsorship 2020">Let's talk!</a></b></p>
                <div className="sponsors-list">
                    <div><img src={uipath} alt="UiPath"></img></div>
                    <div><img src={endava} alt="Endava"></img></div>
                    <div><img src={kambi} alt="Kambi"></img></div>
                    <div><img src={softvision} alt="Softvison"></img></div>
                </div>
            </div>
            <a href="mailto:sponsors@jscamp.ro?subject=Sponsorship 2020" className="button">Become a 2020 Sponsor!</a>
        </section>
    )
}

export default Sponsors