import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import "./style.scss";

export const Logo = (props) => {
    const url = window.location.pathname
    console.log('props', props)

    return (
        <div className="logo">
            {
                url === '/'
                    ? <span className={`logo__${props.color}`}>ВелоСпортАс</span>
                    : <a className={`logo__${props.color}`} href="/">ВелоСпортАс</a>
            }
        </div>
    )
}

Logo.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string
}

Logo.defaultProps = {
    color: 'black',
    size: '18'
  };