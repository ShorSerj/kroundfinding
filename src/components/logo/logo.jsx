import React from 'react'

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
