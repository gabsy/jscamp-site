import React from "react"
import { useStaticQuery, graphql } from "gatsby"


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
            <h2 className="text-center">Our Awesome Speakers</h2>
            <div className="block">
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
                <div className="more-speakers-text">
                    <p><b>More speakers to be announced.</b>
                    <br></br>Stay tuned, we will also run <b>2 full-day workshops on September 22</b>. Details will be available soon. </p>
                    <p>Follow us for updates on <a href="https://www.facebook.com/JscRomania">Facebook</a> and <a href="https://www.twitter.com/jscampro">Twitter</a>.</p>
                </div>
            </div>
        </section>
    )
}

export default SpeakersList