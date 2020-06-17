import React from 'react'
import { YouMayAlsoLike, Header, Footer } from '../../components'


export class Good extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="good">
                    <div className="good__slider">Слайдер с фото</div>
                    <form className="good__about">
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
                        <button>Add to cart</button>
                    </form>
                </div>
                <YouMayAlsoLike />
                <Footer />
            </>
        )
    }
}