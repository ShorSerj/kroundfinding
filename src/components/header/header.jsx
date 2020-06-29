import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu } from '../menu'
import { Logo } from '../logo'
import { actions } from '../../__data__'

import style from './style.scss'

const mapStateToProps = (state) => {
  // console.log('state', state)
  return { logo: state.logo, }

}

const mapDispatchToProps = (dispatch) => ({
  contextLogo: () => dispatch(actions.logo('header__logo'))
})

export const Header = (props) => {
    const { logo } = this.props
    return (<div className="header">
      <Menu />
      <Logo logo />
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

export const Logotype = connect(mapStateToProps, mapDispatchToProps)(Logo)