import React from 'react'
import propTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

export default function Feature(props) {
    return (
        <Fade bottom delay={props.fadeDelay}>
            <div className="tiles-item">
                <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                        <div className="features-tiles-item-image mb-16">
                            <img src={props.data.image} alt="Feature tile"
                                width="64" height="64" />
                        </div>
                    </div>
                    <div className="features-tiles-item-content">
                        <h4 className="mt-0 mb-8">
                            {props.data.title}
                        </h4>
                        <p className="m-0 text-sm">
                            {props.data.description}
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

Feature.propTypes = {
    fadeDelay: propTypes.number,
    data: propTypes.object
}
