import React from 'react'
import './style.scss'

export class ButtonSubmite extends React.Component {
    render() {
        return (
            <div className="">
                <button type="submit">{this.props.children}</button>
            </div>
        )
    }
}