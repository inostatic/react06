import React from "react"
import classNames from "classnames"
import PropTypes from 'prop-types'

export const Button = ({text, style = {}, onSubmit}) => {



    const className = classNames({
        "button": true,
        ...style
    })

    return (
        <button className={className} onClick={onSubmit}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
}