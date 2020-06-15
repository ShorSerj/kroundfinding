import React from 'react'

import "./style.scss";

export const  Logo = (props) => {
    console.log(props)
    return (<div >
        <span>{props.item.nameCity}</span>
        <span> : </span>
        <span>{props.item.temperature}</span>
        <button onClick={() => { this.handleClick(props.item.nameCity) }}>like</button>
    </div>)
}
