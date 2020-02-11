import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Workshops = () => {
    const data = useStaticQuery(graphql `
    query {
      allContentfulSpeaker ( sort:{fields: speakerId, order: ASC}) {
        edges {
          node {
            speakerName
            speakerPhoto {
              file {
                url
              }
            }
            workshopTitle
            workshopDetails { 
                workshopDetails
             }
          }
        }
      }
    }
  `)

    return (
        <section className="workshops-grid" id="workshops">
            <h2 className="text-center">Workshops</h2>
            <div className="block">
                <div className="grid workshops-home">
                {data.allContentfulSpeaker.edges.map((edge) => { 
                        if(edge.node.workshopTitle !== null) {
                            return (
                                <div className="workshop col-6_xs-12">
                                    <div className="img">
                                        <img src={edge.node.speakerPhoto.file.url} alt={edge.node.speakerName}></img>
                                    </div>
                                    <div className="speaker-name">{edge.node.speakerName}</div>
                                    <div className="speaker-title-company">{edge.node.speakerTitle} 
                                    {edge.node.speakerCompany !== null &&
                                        <span> @ <b>{edge.node.workshopDetails.workshopDetails}</b></span>
                                    }
                                    </div>
                                    <div className="topic-tag">{edge.node.topic}</div>
                                </div>
                            )
                        }
                    }
                )}
                </div>
            </div>
        </section>
    )
}

export default Workshops