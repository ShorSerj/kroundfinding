import React from 'react'
import PropTypes from 'prop-types'
import { } from '..'
import { actions } from '../../__data__'


import './style.scss';

console.log('slider')

export class ProductSlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const images = this.props.children
        const productMainImage = images[0]
const secondProduct = document.querySelector('')
        console.log('slider', productMainImage)
        return (
            <>
                <div className="product-card__slider">
                    <div className="product-card__slider-image">
                        {productMainImage}
                    </div>
                    {images.length > 1 &&
                        <div className="product-card__slider-other">
                            {
                                images.map((item) => {
                                    return (
                                        <div className="product-card__slider-other-image">
                                            {item}
                                        </div>
                                    )
                                })
                            }

                        </div>
                    }

                </div>
            </>
        )
    }
}

