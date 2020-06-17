import React from 'react'
import PropTypes from 'prop-types'

import { Bestsellers, Header } from '../../components'

import style from './style.scss'

export const Main = (props) => {

  return (
    <>
      <Header />
      <Bestsellers />
    </>
  )
}

Main.propTypes = {

}

Main.defaultProps = {

}