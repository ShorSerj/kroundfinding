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
    goodAddToCart: (id) => dispatch(actions.good(id))
})
let goods = []
class GoodComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    addToCart = (id) => {
        // console.log('товар id ', id)
        this.props.goodAddToCart(id)
    }

    render() {
        const { cart } = this.props

        console.log('cart', this.props)
        return (
            <>
                <Header />
                <div className="">
                    {
                        cart.length
                            ? <table>
                                <tr>
                                    <th>№ п/п</th>
                                    <th>Наименование</th>
                                    <th>Параметры</th>
                                    <th>Количество</th>
                                    <th>Цена за 1 ед.</th>
                                    <th>Общая цена</th>
                                </tr>
                                {cart.map((item) =>
                                    <tr>
                                        <th>№ п/п</th>
                                        <th>{item.name}</th>
                                        <th>{item.color},{item.size}</th>
                                        <th>{item.count}</th>
                                        <th>{item.cost}</th>
                                        <th>{item.cost * item.count}</th>
                                    </tr>
                                )}
                            </table>
                            : <div className="">Нет товара</div>
                    }
                </div>
                <Footer />
            </>
        )
    }
}

export const Cart = connect(mapStateToProps, mapDispatchToProps)(GoodComponent)
