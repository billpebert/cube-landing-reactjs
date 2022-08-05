import React from 'react'
import Card from 'elements/Card'
import Lists from 'elements/Lists'
import Section from 'elements/Section'
import Button from 'elements/Button'
import Fade from 'react-reveal/Fade'

export default function Pricing() {

    const listPricing = [
        {
            price: 27,
            currencySymbol: "$",
            description: "Lorem ipsum is a common text",
            features: [
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: false, content: "Excepteur sint occaecat velit" },
                { isChecked: false, content: "Excepteur sint occaecat velit" },
            ]
        },
        {
            price: 47,
            currencySymbol: "$",
            description: "Lorem ipsum is a common text",
            features: [
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: false, content: "Excepteur sint occaecat velit" },
            ]
        },
        {
            price: 87,
            currencySymbol: "$",
            description: "Lorem ipsum is a common text",
            features: [
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
            ]
        },
    ]
    return (
        <Section className='pricing'>
            <div className="container">
                <div className="pricing-inner section-inner has-top-divider">
                    <Fade bottom delay={500}>
                        <div className="section-header center-content">
                            <div className="container-xs">
                                <h2 className="mt-0 mb-16">
                                    Simple, transarent pricing
                                </h2>
                                <p className="m-0">
                                    Lorem ipsum is common placeholder text
                                    used to demonstrate the graphic elements
                                    of a document or visual presentation.
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <div className="tiles-wrap">
                        {
                            listPricing.map((list, index) =>
                                <Card hasShadow key={index} data-aos="fade-up">
                                    <div className="pricing-item-content">
                                        <div className="pricing-item-header pb-24 mb-24">
                                            <div className="pricing-item-price mb-4">
                                                <span className="pricing-item-price-currency h2">{list.currencySymbol}</span><span
                                                    className="pricing-item-price-amount h1 pricing-switchable"
                                                    data-pricing-monthly="34" data-pricing-yearly="27">{list.price}</span>
                                            </div>
                                            <div className="text-xs text-color-low">
                                                {list.description}
                                            </div>
                                        </div>
                                        <div className="pricing-item-features mb-40">
                                            <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                                                What’s included
                                            </div>
                                            <Lists data={list.features} isSmall className="pricing-item-features-list text-xs mb-32" />
                                        </div>
                                    </div>
                                    <div className="pricing-item-cta mb-8">
                                        <Button isBlock isPrimary>Start Free Trial</Button>
                                    </div>
                                </Card>
                            )
                        }
                    </div>
                </div>
            </div>
        </Section>
    )
}
