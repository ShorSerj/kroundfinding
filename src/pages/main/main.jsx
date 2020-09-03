import React from 'react'
import PropTypes from 'prop-types'

import { Header, Footer, Breadcrumbs, SliderRange, BusinessCard } from '../../components'

import style from './style.scss'

export const Main = (props) => {

  return (
    <>
      <Header />
      {/* <Breadcrumbs /> */}
      <main>
        {/* <SliderRange /> */}
        <BusinessCard />
      </main>
      <Footer />
    </>
  )
}

Main.propTypes = {

}

Main.defaultProps = {

}