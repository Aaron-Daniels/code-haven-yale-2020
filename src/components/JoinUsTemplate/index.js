import React from 'react'
import Helmet from 'react-helmet'
import { HTMLContent } from '../Content'
import PropTypes from 'prop-types'

const JoinUsTemplate = ({
    title,
    meta_title,
    meta_description,
    content
}) => (
        <div>
            <Helmet>
                <title>{meta_title}</title>
                <meta name='description' content={meta_description} />
            </Helmet>
            <section className='hero hero-join is-primary is-bold is-medium'>
                <div className='hero-body'>
                    <div className='container'>
                        <div className='columns'>
                            <div className='column is-10 is-offset-1'>
                                <div className='section'>
                                    <h1 className='title is-size-1'>
                                        {title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section--gradient'>
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-three-fifths">
                        <div className="container image is-16by9">
                            <iframe className='has-ratio' src="https://www.youtube.com/embed/iMtMpBSn4Rs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
                <div className='columns'>
                    {/* <div className="column">
                        <image src="/img/mentors.jpg"></image>
                    </div> */}
                    <div className='column is-10 is-offset-1'>
                        <div className="section">
                            <HTMLContent className='content' content={content} />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )

// PricingPageTemplate.propTypes = {
//     title: PropTypes.string,
//     meta_title: PropTypes.string,
//     meta_description: PropTypes.string,
//     pricing: PropTypes.shape({
//         heading: PropTypes.string,
//         description: PropTypes.string,
//         plans: PropTypes.array,
//     }),
// }

export default JoinUsTemplate
