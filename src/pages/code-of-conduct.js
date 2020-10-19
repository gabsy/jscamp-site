import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import SEO from "../components/seo"

const CodeOfConduct = () => (
  <Layout>
    
    <SEO title="JSCamp Romania Code of Conduct" />
    <Helmet bodyAttributes={{ class: 'codeConduct' }} />
    <div class="inner-page-wrapper">
        <div class="block">
            <h2>Code of Conduct</h2>
            <p>All participants, speakers, sponsors attending a JSCamp Romania 2021 are required to agree with the following code of conduct. The organizers will enforce this code throughout the event. </p>

            <p>JSCamp Romania is all about equal community and as such, we will do whatever we believe is necessary to provide a safe, friendly and fun environment for our attendees, staff, guests, sponsors and presenters. We commit to upholding this code of conduct and we invite all those who participate in JSCamp Romania 2021 to help us create safe and positive experiences for everyone. Harassment of any kind will not be tolerated. </p>

            <p>If a participant engages in harassing behaviour, the conference organizers will take any action deemed appropriate, including warning the offenders, expelling them from the conference with no refund.</p>

            <p>If you are being harassed, notice that someone else is being harassed, or have any other concerns even if they seem inconsequential, please contact an event chair or a member of conference staff immediately. </p>

            <p>We expect participants to follow these rules at the conference venues. If you are outside of the conference venue and cannot bring these concerns to the immediate attention of the event staff, do contact us on Twitter, <a href="https://twitter.com/jscampro">@jscampro</a> or email at <a href="mailto:contact@jscamp.ro">contact@jscamp.ro</a></p>

            <p>We'd like to thank you for keeping the event welcoming, respectful, fun and friendly to all participants.</p>
            
        </div>
    </div>
   
  </Layout>
)

export default CodeOfConduct
