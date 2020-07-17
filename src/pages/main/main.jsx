import React from 'react'
import PropTypes from 'prop-types'

import { Bestsellers, Header, Footer, Breadcrumbs } from '../../components'

import style from './style.scss'

export const Main = (props) => {

  return (
    <>
      <Header/>
      <Breadcrumbs />
      <Bestsellers />
      <Footer />
    </>
  )
}

Main.propTypes = {

}

Main.defaultProps = {

}