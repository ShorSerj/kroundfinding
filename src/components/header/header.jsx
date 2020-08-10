import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Menu, Logo, SearchBar } from '../'

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
      {/* <SearchBar /> */}
      <Link className="header__addlinks_cart" to='/cart'></Link>
    </div>
  </div>)
}

Header.propTypes = {

}

Header.defaultProps = {

}
