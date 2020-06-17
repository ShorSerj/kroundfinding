import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from '../menu'

import style from './style.scss'

export const Header = (props) => {

  return (<div className="mainWhite">
    <Menu />
  </div>)
}

Header.propTypes = {

}

Header.defaultProps = {

}
