import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
        }
    }

    handleClickMenu = () => {
        this.setState(
            {
                menuOpen: !this.state.menuOpen
            }
        )
    }

    render() {
        const buttonOpen = this.state.menuOpen ? 'menu__button--open' : ''
        const menuListOpen = this.state.menuOpen ? 'menu__list--open' : ''
        const ariaHidden = !this.state.menuOpen
        console.log('!this.state.menuOpen', !this.state.menuOpen)
        return (
            <>
                <nav className="header__menu menu">
                    <button
                        className={`menu__button ${buttonOpen}`}
                        type="button"
                        aria-expanded={ariaHidden}
                        aria-controls="menu__list"
                        onClick={this.handleClickMenu}
                    >
                        <svg className="menu__icon" aria-hidden="false" width="32" height="32">
                            <use className="menu__icon-menu" href="/src/assets/images/sprite.svg#menu"></use>
                            <use className="menu__icon-cross" href="/src/assets/images/sprite.svg#cross"></use>
                        </svg>
                    </button>
                    <ul className={`menu__list ${menuListOpen}`} id="menu__list">
                        <li className="menu__item"><Link className="menu__link" to='/catalog'>Каталог</Link></li>
                        <li className="menu__item"><Link className="menu__link" to='/about'>О нас</Link></li>
                        <li className="menu__item"><Link className="menu__link" to='/contacts'>Контакты</Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}