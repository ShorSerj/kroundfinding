import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export class Menu extends React.Component {
    render() {
        return (
            <>
                <nav className="menu">
                    <button className="menu__button" type="button" aria-expanded="false" aria-controls="menu__list">
                        <svg className="menu__icon" aria-hidden="true" width="32" height="32">
                            <use className="menu__icon-menu" href="/src/assets/images/sprite.svg#menu"></use>
                            <use className="menu__icon-cross" href="/src/assets/images/sprite.svg#cross"></use>
                        </svg>
                    </button>
                    <ul className="menu__list">
                        <li className="menu__link"><Link to='/catalog'>Каталог</Link></li>
                        <li className="menu__link"><Link to='/about'>О нас</Link></li>
                        <li className="menu__link"><Link to='/contacts'>Контакты</Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}