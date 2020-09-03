import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export class SliderRange extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            min: 10,
            max: 200,
            valueCurrent: 50,
            step: 1,
            valueLeft: 0,
            valueRight: 200,
        }
        this.sliderRangeInput = React.createRef()
        this.sliderRangeSpan = React.createRef()
    }
    componentDidMount() {
        console.log('sliderRangeInput.current', this.sliderRangeInput.current.value)
    }

    handleInput = () => {
        const sliderRangeInput = this.sliderRangeInput.current.value
        const sliderRangeSpan = this.sliderRangeSpan.current
        // console.log('sliderRangeInput', sliderRangeInput)
        this.setState({ valueCurrent: sliderRangeInput })

        sliderRangeSpan.textContent = sliderRangeInput
        sliderRangeSpan.style.left = (sliderRangeInput / 2) + "%";
        sliderRangeSpan.classList.add('show')
    }

    handleInputBlur = () => {
        const sliderRangeSpan = this.sliderRangeSpan.current
        sliderRangeSpan.classList.remove('show')
    }

    render() {
        const { min, max, valueCurrent, step, valueLeft, valueRight } = this.state


        return (
            <div className="slider-range">

                <div className="range">
                    <div className="sliderValue">
                        <span ref={this.sliderRangeSpan}>{valueCurrent}</span>
                    </div>
                    <div className="field">
                        <div className="value left">{valueLeft}</div>
                        <input
                            ref={this.sliderRangeInput}
                            onInput={this.handleInput}
                            onBlur={this.handleInputBlur}
                            type="range"
                            min={min}
                            max={max}
                            value={valueCurrent}
                            step={step}
                        />
                        <div className="value right">{valueRight}</div>
                    </div>
                </div>

            </div>
        )
    }
}