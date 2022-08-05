import React from 'react'
import Feature from 'parts/Feature'
import Section from 'elements/Section'

import FeatureTile1 from 'assets/images/feature-tile-icon-01.svg'
import FeatureTile2 from 'assets/images/feature-tile-icon-02.svg'
import FeatureTile3 from 'assets/images/feature-tile-icon-03.svg'

export default function Features() {
    const features = [
        {
            image: FeatureTile1,
            title: "Join the system",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            image: FeatureTile2,
            title: "Join the system",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            image: FeatureTile3,
            title: "Join the system",
            description: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
    ]
    return (
        <Section className='features-tiles'>
            <div className="container">
                <div className="features-tiles-inner section-inner">
                    <div className="tiles-wrap">
                        {
                            features.map((feature, index) => {
                                return (
                                    < Feature fadeDelay={index * 300} data={feature} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Section>
    )
}
