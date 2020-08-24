import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header, Footer, YouMayAlsoLike, ProductSlider } from '../../components'
import { actions } from '../../__data__'


import './style.scss';
const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => ({
})

class ProductComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <>
                <Header />
                <main>
                    <div className="product-card">
                        <ProductSlider>
                            <img src="/img/product.png" alt="" />
                            <img src="/img/image 1.png" alt="" />
                            <img src="/img/image 9.png" alt="" />
                            <img src="/img/image 11.png" alt="" />
                            <img src="/img/image 14.png" alt="" />
                        </ProductSlider>
                        
                        <div className="product-card__description">
                            <h1>Cyberbike Cruiser</h1>
                            <p>
                                Комфортного электрофэтбайка с отличными характеристиками для ежедневных поездок по городу и катания за его пределами. В отличие от обычного велосипеда эта модель оборудована электроприводом, позволяющим преодолевать большие расстояния без физической усталости. Рама электровелосипеда сконструирована таким образом, чтобы обеспечить райдеру удобную прямую посадку.
                    </p>
                            <form action="">
                                <div className="product-card__parametrs">
                                    <div className="product-card__parametr">
                                        <h3>Цвет</h3>
                                    </div>
                                    <div className="product-card__parametr">
                                        <h3>Размер</h3>
                                    </div>
                                </div>
                                <div className="product-card__coast">
                                    59 600 руб.
                        </div>
                                <button type="submit">В список желаний</button>
                            </form>
                        </div>
                    </div >
                </main >
                <YouMayAlsoLike />
                <Footer />
            </>
        )
    }
}

export const Product = connect(mapStateToProps, mapDispatchToProps)(ProductComponent)