import React from 'react'
import Section from 'elements/Section'
import { Fade } from 'react-reveal'
import HeroImage from 'assets/images/hero-image.png'

export default function Hero() {
    return (
        <Section className='hero illustration-section-01' isCenteredContent>
            <div className="container-sm">
                <div className="hero-inner section-inner">
                    <div className="hero-content">
                        <Fade bottom delay={200}>
                            <h1 className="mt-0 mb-16" data-aos="fade-up">
                                Landing template for startups
                            </h1>
                        </Fade>
                        <div className="container-xs">
                            <Fade bottom delay={300}>
                                <p className="mt-0 mb-32" >
                                    Our landing page template works on all
                                    devices, so you only have to set it up
                                    once, and get beautiful results forever.
                                </p>
                            </Fade>
                        </div>
                    </div>
                    <div className="hero-figure illustration-element-01" data-reveal-value="20px"
                    >
                        <Fade bottom delay={400}>
                            <img className="has-shadow" src={HeroImage} alt="Hero image" width="896"
                                height="504" />
                        </Fade>
                    </div>
                </div>
            </div>
        </Section>
    )
}
