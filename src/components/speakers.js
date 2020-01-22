import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import heroillustration from "../images/hero-illustration.svg"
import scrollTo from 'gatsby-plugin-smoothscroll';


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
            speakerTitle
            speakerCompany
            topic
          }
        }
      }
    }
  `)

    return (
        <section className="speakers-grid" id="speakers">
            <h2 className="text-center">Our Lovely Speakers</h2>
            <div className="block">
                {/* <ul className="speakers-list">
                {data.allContentfulSpeaker.edges.map((edge) => { 
                        return (
                           
                            // <li>{edge.node.id}</li>
                            // <li>{edge.node.speakerName}</li>
                            // <li>{edge.node.speakerDetails.speakerDetails}</li>
                            <li>
                                <img src={edge.node.speakerPhoto.file.url} alt={edge.node.speakerName}></img>
                                <div className="speaker-name">{edge.node.speakerName}</div>
                                <div className="speaker-title-company">{edge.node.speakerTitle} @ <b>{edge.node.speakerCompany}</b></div>
                            </li>
                        )
                    }
                )}
                </ul> */}
                <div className="grid speakers-list">
                    {data.allContentfulSpeaker.edges.map((edge) => { 
                        return (
                            <div className="speaker col-3_lg-4_md-6_xs-12">
                                <div className="img">
                                    <img src={edge.node.speakerPhoto.file.url} alt={edge.node.speakerName}></img>
                                </div>
                                <div className="speaker-name">{edge.node.speakerName}</div>
                                <div className="speaker-title-company">{edge.node.speakerTitle} @ <b>{edge.node.speakerCompany}</b></div>
                                <div className="topic-tag">{edge.node.topic}</div>
                            </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>
    )
}

export default SpeakersList