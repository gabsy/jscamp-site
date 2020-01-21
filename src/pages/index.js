import React from "react"
import { useStaticQuery, graphql} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeHero from "../components/homehero"

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

const SpeakersList = () => {
    const data = useStaticQuery(graphql `
    query {
      allContentfulSpeaker(limit: 1000) {
        edges {
          node {
            id
            speakerName
            speakerPhoto {
              file {
                url
              }
            }
            speakerDetails {
                speakerDetails
              }
          }
        }
      }
    }
  `)

    return (
        <Layout>
            <HomeHero />
            <div className="speakers-list" id="speakers">
            {data.allContentfulSpeaker.edges.map((edge) => { 
                
                    return (
                        <ul>
                        <li>{edge.node.id}</li>
                        <li>{edge.node.speakerName}</li>
                        <li>{edge.node.speakerDetails.speakerDetails}</li>
                        <li>
                            <img src={edge.node.speakerPhoto.file.url} alt="{edge.node.speakerName}"></img>
                        </li>
                        </ul>
                    )
                }
            )}
            </div>
            
        </Layout>
    )
}

export default SpeakersList