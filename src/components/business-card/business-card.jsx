import React from 'react'
import './style.scss';

export class BusinessCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h2>Визитка</h2>

                <div className="business-card">
                    <div className="card">
                        <div className="front">
                            <div className="logo"><span></span></div>
                        </div>
                        <div className="back">
                            <p>Helen Parker<span>design <i>&</i> photography</span></p>
                            <ul>
                                <li>+1-111-111-11-11</li>
                                <li>my-email@email.com</li>
                                <li>my-site.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
