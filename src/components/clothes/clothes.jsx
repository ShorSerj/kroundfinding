import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { YouMayAlsoLike, Header, Footer } from '../../components'
import { actions } from '../../__data__'


import './style.scss';

const mapStateToProps = (state) => {
    return { cart: state.good.cart, }
}

const mapDispatchToProps = (dispatch) => ({
    goodAddToCart: (id, name, cost, size, color) => dispatch(actions.good(id, name, cost, size, color)),
    goodClearCart: () => dispatch(actions.clear())
})

class ClothesCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    addToCart = (id, name, cost, size, color) => {
        this.props.goodAddToCart(id, name, cost, size, color)
    }

    clearCart = () => {
        this.props.goodClearCart()
    }

    render() {
        const { item } = this.props
        return (
            <div>
                <img src={item.img} />
                <span className="name">{item.name}</span>
                <span className="cost">{'$ ' + item.cost}</span>
                <button onClick={() => this.addToCart(item.id, item.name, item.cost, item.size, item.color)}>Add to cart</button>
            </div>
        )
    }
}
// Clothes.propTypes = {
//     item: PropTypes.object
// }

// Clothes.defaultProps = {
//     item: {}
// }
export const Clothes = connect(mapStateToProps, mapDispatchToProps)(ClothesCart)