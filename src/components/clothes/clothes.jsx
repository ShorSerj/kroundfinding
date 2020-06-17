import React from 'react'
import PropTypes from 'prop-types'

import './style.scss';

export const Clothes = ({ item }) => {
    return (
        <div>
            <img src={item.img} />
            <span className="name">{item.name}</span>
            <span className="cost">{'$ ' + item.cost}</span>
        </div>
    )
}
Clothes.propTypes = {
    item: PropTypes.object
}

Clothes.defaultProps = {
    item: {}
}