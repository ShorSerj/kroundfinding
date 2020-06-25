import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { YouMayAlsoLike, Header, Footer } from '../../components'
import { actions } from '../../__data__'

const mapStateToProps = (state) => {
    console.log('state', state)
    return { cart: state.good.cart, }

}

const mapDispatchToProps = (dispatch) => ({
    goodAddToCart: (id) => dispatch(actions.good(id))
})
class GoodComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    addToCart = (id) => {
        console.log('товар id ', id)
        this.props.goodAddToCart(id)
    }

    render() {

        const { cart } = this.props
        console.log('cart---------------------', cart)

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
                            </li>
                            <li>
                                <div className="">Size</div>
                                <input type="checkbox" name="" id="" />
                                <input type="checkbox" name="" id="" />
                                <input type="checkbox" name="" id="" />
                                <input type="checkbox" name="" id="" />
                                <input type="checkbox" name="" id="" />
                            </li>
                        </ul>
                        <div className="good__price">$ 160</div>
                        <div>
                            {
                                cart.map((item) => item.name)
                            }
                        </div>
                        <button
                            onClick={() => this.addToCart(12121)}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
                <YouMayAlsoLike />
                <Footer />
            </>
        )
    }
}

export const Good = connect(mapStateToProps, mapDispatchToProps)(GoodComponent)
