import React from 'react'
import PropTypes from 'prop-types'

import { Menu, Logo } from '../'

import style from './style.scss'

export const Header = (props) => {
  return (<div className="header">
    <Menu />
    <div className="header__logo">
      <Logo
        color="black"
        size={18}
      />
    </div>
    <div className="header__addlinks">
      <div className="header__addlinks_search">
        {/* <input type="text" /> */}
      </div>
      {/* <div 
        onClick={() => this.addToCart(12121)}>
      </div> */}
      <Link className="header__addlinks_cart" to='/cart'></Link>
    </div>
  </div>)
}

Header.propTypes = {

}

Header.defaultProps = {

}
