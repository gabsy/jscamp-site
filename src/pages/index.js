import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHero from "../components/homehero"
import Speakers from "../components/speakers"
import MasterCeremony from "../components/mc"

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
            <SEO title="JSCamp Romania 2020" />
            <HomeHero />
            <Speakers />
            <MasterCeremony />
            
        </Layout>
    )
}

export default IndexPage