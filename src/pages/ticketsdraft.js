import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import SEO from "../components/seo"

const CodeOfConduct = () => (
  <Layout>
    
    <SEO title="JSCamp Romania Tickets" />
    <Helmet bodyAttributes={{ class: 'tickets' }} />
    <div className="inner-page-wrapper tickets">
        <h2 className="text-center">Tickets</h2>
        <div className="block">
          {/* <div class="grid grid-tickets">
              <div class="col-4_lg-6_xs-12">
                <a href="http://46.101.199.230/form/index.php/welcome/form/JSC20/JSC20CONF" class="ticket">
                    <b>Early Bird</b> <br></br>
                    <div class="price">129 &euro;</div>
                    + VAT<br></br>
                    <p>Only 50 available</p>
                </a>
              </div>
              <div class="col-4_md-6_xs-12">
                <a href="http://46.101.199.230/form/index.php/welcome/form/JSC20/JSC20SEM" class="ticket workshop">
                    <b>Workshop</b> <br></br>
                    <div class="price">330 &euro;</div>
                    + VAT<br></br>
                    <p>30 seats / Workshop</p>
                </a>
              </div>
              <div class="col-4_md-6_xs-12">
                <a href="http://46.101.199.230/form/index.php/welcome/form/JSC20/JSC20SEMCONF" class="ticket combo">
                    <b>Combo: Conf+Workshop</b> <br></br>
                    <div class="price">459 &euro;</div>
                    + VAT
                    <p>30 seats / Workshop</p>
                </a>
              </div>
          </div> */}
          <script type="text/javascript" src="https://ove.ro/embed/b893los.js?en"></script>
        </div>
        <h3 className="text-center">10% discount for groups of 3 or more only for conference tickets.</h3>
    </div>
   
  </Layout>
)

export default CodeOfConduct
