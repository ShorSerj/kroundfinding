import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export class Menu extends React.Component {
    render() {
        return (
            <>
                <nav className="menu">
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