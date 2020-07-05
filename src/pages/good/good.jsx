import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { YouMayAlsoLike, Header, Footer } from '../../components'
import { actions } from '../../__data__'

const mapStateToProps = (state) => {
    // console.log('state', state)
    return { cart: state.good.cart, }
}

const mapDispatchToProps = (dispatch) => ({
    goodAddToCart: (id, color, size) => dispatch(actions.good(id, color, size)),
    goodClearCart: () => dispatch(actions.clear())
})

class GoodComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    addToCart = (id) => {
        let color = document.querySelector('input[name="color"]:checked').value;
        let size = document.querySelector('input[name="size"]:checked').value;

        this.props.goodAddToCart(id, color, size)
    }

    clearCart = () => {
        this.props.goodClearCart()
    }
    render() {

        const { cart } = this.props
        // console.log('cart---------------------', cart)

        return (
            <>
                <Header />
                <div className="good">
                    <div className="good__slider">Слайдер с фото</div>
                    <div className="good__about">
                        <div className="good__description"></div>
                        <ul className="good__properties">
                            <li>
                                <div>Color</div>
                                <input type="checkbox" name="" id="" />
                                <input type="checkbox" name="" id="" />
                                <input type="checkbox" name="" id="" />
                                {/* <label className="radio">
                                    <input type="radio" name="color" value='red' />
                                </label>
                                <label className="radio">
                                    <input type="radio" name="color" value='blue' />
                                </label>
                                <label className="radio">
                                    <input type="radio" name="color" value='green' />
                                </label> */}
                            </li>
                            <li>
                                <div className="">Size</div>
                                <input type="checkbox" name="" id="" />
                                <input type="checkbox" name="" id="" />
                                <input type="checkbox" name="" id="" />
                                <input type="checkbox" name="" id="" />
                                <input type="checkbox" name="" id="" />
                                {/* <label className="radio">
                                    <input type="radio" name="size" value='XS' />
                                </label>
                                <label className="radio">
                                    <input type="radio" name="size" value='S' />
                                </label>
                                <label className="radio">
                                    <input type="radio" name="size" value='M' />
                                </label>
                                <label className="radio">
                                    <input type="radio" name="size" value='L' />
                                </label>
                                <label className="radio">
                                    <input type="radio" name="size" value='XL' />
                                </label> */}
                            </li>
                        </ul>
                        <div className="good__price">$ 160</div>
                        {/* <div className="">
                            {
                                cart.map((item) => item.id + " " + item.name + " " + item.color + " " + item.size)
                            }
                        </div> */}
                        {/* <button
                            onClick={() => this.addToCart(12121)}
                        >
                            Add to cart
                        </button> */}
                        {/* <button
                            onClick={() => this.clearCart()}
                        >Clear cart</button> */}
                    </div>
                </div>

                <YouMayAlsoLike />
                <Footer />
            </>
        )

    }
}


export const Good = connect(mapStateToProps, mapDispatchToProps)(GoodComponent)
