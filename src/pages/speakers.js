import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SpeakersListDetails from "../components/speakers-details"

const CodeOfConduct = () => (
  <Layout>
    
    <SEO title="JSCamp Romania Tickets" />
    <Helmet bodyAttributes={{ class: 'speakers' }} />
    <SpeakersListDetails></SpeakersListDetails>
   
  </Layout>
)

export default CodeOfConduct
