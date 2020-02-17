import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHero from "../components/homehero"
import Speakers from "../components/speakers"
import MasterCeremony from "../components/mc"
import Sponsors from "../components/sponsors"
import Workshops from "../components/workshops"
import Venue from "../components/venue"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/"><button>Go to page 2</button></Link>
//   </Layout>
// )

// export default IndexPage

const IndexPage = () => {

    return (
        <Layout>
            <SEO />
            <Helmet bodyAttributes={{ class: 'homepage' }} />
            <HomeHero />
            <Speakers />
            <MasterCeremony />
            <Workshops />
            <Venue/>
            <Sponsors />
            
        </Layout>
    )
}

export default IndexPage