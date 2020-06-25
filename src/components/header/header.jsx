import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from '../menu'

import style from './style.scss'

export const Header = (props) => {

  return (<div className="header">
    <Menu />
    <div className="header__logo">
      <a href="#">ВелоСпортАс</a>
    </div>
    <div className="header__addlinks">
      <div className="header__addlinks_search">
        {/* <input type="text" /> */}
      </div>
      <div className="header__addlinks_cart"></div>
    </div>
  </div>)
}

Header.propTypes = {

}

Header.defaultProps = {

}
