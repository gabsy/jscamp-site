import React from "react"
import brucePhoto from "../images/bruce-lawson.png"
import logoTwitter from "../images/icon-twitter.svg"

const MasterCeremony = () => {
    return (
        <section className="master-ceremony">
            <div className="block">
                <div className="grid">
                <div className="col-6_sm-12 text-center">
                        <img src={brucePhoto} alt="Bruce Lawson" ></img>
                    </div>
                    <div className="col-6_sm-12">
                    <h2>
                        <div className="tagline">MASTER OF CEREMONY AND CO-CURATOR</div>
                        Bruce Lawson
                    </h2>
                       
                        <p>Bruce has been the best friend of our conferece since its start in 2014. He was a speaker at the event and MC-ed most of our JSCamp editions so far. Since 2019 he is also Co-Curator of the event, and his involvement helps us make the best out of JScamp.<br></br>We love Bruce and we know you love him too. Or, if it's your first JSCamp, you will. </p>
                        <p><img src={logoTwitter} alt="Follow us on Twitter" style={{ width: '20px', opacity: '0.8', marginRight: '10px' }}></img> <a href="https://twitter.com/brucel">@brucel</a></p>
                    </div>
                   
                    
                </div>
            </div>
            
        </section>
    )
}

export default MasterCeremony