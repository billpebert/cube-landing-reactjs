import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Button(props) {
    const className = ['button']
    if (props.isPrimary) className.push("button-primary")
    if (props.isWideMobile) className.push("button-wide-mobile")
    if (props.isSmall) className.push("button-sm")
    if (props.isBlock) className.push("button-block")

    return (
        <Link to="#" className={className.join(" ")}>
            {props.children}
        </Link>
    )
}

Button.propTypes = {
    isPrimary: propTypes.bool,
    isWideMobile: propTypes.bool,
    isBlock: propTypes.bool,
    isSmall: propTypes.bool,
}
