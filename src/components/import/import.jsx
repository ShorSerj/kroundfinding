import React from 'react'
import './style.scss'

export class Import extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="question__import">
                <label>
                    <input type={this.props.type} id={this.props.id} placeholder={this.props.placeholder} />
                </label>
            </div>
        )
    }
}