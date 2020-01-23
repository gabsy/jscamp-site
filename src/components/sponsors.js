import React from "react"
import ibm from "../images/past_sponsors/ibm.svg"
import systematic from "../images/past_sponsors/systematic.png"
import accenture from "../images/past_sponsors/accenture.png"
import booking from "../images/past_sponsors/booking.png"
import deutschebank from "../images/past_sponsors/deutsche_bank.png"
import endava from "../images/past_sponsors/endava.png"
import kambi from "../images/past_sponsors/kambi.png"
import softvision from "../images/past_sponsors/softvision.png"
import uipath from "../images/past_sponsors/uipath.png"
import stefanini from "../images/past_sponsors/stefanini.png"
import staropramen from "../images/past_sponsors/staropramen.png"
import carlsberg from "../images/past_sponsors/carlsberg.png"

const Sponsors = () => {
    return (
        <section className="sponsors">
            <h2>Past Sponsors</h2>
            <p>Here are some of the sponsors that helped us along the way. <br></br>Interested in sponsoring the 6th edition of JScamp in 2020? <b><a href="mailto:contact@jscamp.ro?subject=Sponsorship 2020">Let's talk!</a></b></p>
            <div className="block">
                <div><img src={ibm} alt="IBM"></img></div>
                <div><img src={systematic} alt="1and1"></img></div>
                <div><img src={booking} alt="Booking.com"></img></div>
                <div><img src={uipath} alt="UiPath"></img></div>
                <div><img src={accenture} alt="Accenture"></img></div>
                <div><img src={endava} alt="Endava"></img></div>
                <div><img src={kambi} alt="Kambi"></img></div>
                <div><img src={deutschebank} alt="Deutsche Bank"></img></div>
                <div><img src={stefanini} alt="Stefanini"></img></div>
                <div><img src={softvision} alt="Softvison"></img></div>
                <div><img src={staropramen} alt="Ciuc"></img></div>
                <div><img src={carlsberg} alt="Carlsberg"></img></div>
            </div>
            <a href="mailto:contact@jscamp.ro?subject=Sponsorship 2020" className="button">Become a 2020 Sponsor!</a>
        </section>
    )
}

export default Sponsors