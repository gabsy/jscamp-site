import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const Workshops = () => {
    const data = useStaticQuery(graphql `
    query {
      allContentfulSpeaker ( sort:{fields: speakerId, order: ASC}) {
        edges {
          node {
            speakerId
            speakerName
            speakerPhoto {
              file {
                url
              }
            }
            workshopTitle
            workshopDetails { 
                json
             }
          }
        }
      }
    }
  `)

    return (
        <section className="workshops-home" id="workshops">
            <h2 className="text-center">Workshops</h2>
            <div className="block">
                <div className="grid workshops-grid">
                {data.allContentfulSpeaker.edges.map((edge) => { 
                        if(edge.node.workshopTitle !== null) {
                            return (
                                <div className="col-6_lg-12" key={edge.node.speakerId}>
                                    <div className="workshop">
                                        <div className="workshop-header">
                                            <div className="img">
                                                <img src={edge.node.speakerPhoto.file.url} alt={edge.node.speakerName}></img>
                                            </div>
                                            <h2>{edge.node.workshopTitle}</h2>
                                            with <div className="speaker-name">{edge.node.speakerName}</div>
                                           
                                        </div>
                                        <div className="workshop-details">
                                            {documentToReactComponents(edge.node.workshopDetails.json)}
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                            )
                        }
                    }
                )}
                
                </div>

                <div className="text-center">
                    <p><b>Please note that a computer will not be provided, so please bring your own laptop to the workshop, high speed WI-FI connection will be available.</b></p>
                    <br></br><a href="http://46.101.199.230/form/index.php/welcome/form/JSC20/JSC20SEM" className="button">GET YOUR WORKSHOP TICKET!</a>
                </div>
            </div>
        </section>

        
    )
}

export default Workshops