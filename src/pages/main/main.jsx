import React from 'react'
import PropTypes from 'prop-types'

import { Header, Footer } from '../../components'

import style from './style.scss'

export const Main = (props) => {

  return (
    <>
      <Header />
      <main role="main">
        <section className="main-window">
          <div className="background-video">
            <video width="100%" height="auto" preload="auto" autoPlay="autoplay" muted="muted"
              loop="loop" poster="">
              <source src="../src/assets/video/main-back.mp4" type="video/mp4"></source>
              {/* <source src="bg/daisy-stock-webm-video.webm" type="video/webm"></source> */}
            </video>
          </div>
          <div className="main__dicription">
            <div className="main__dicription-block">
              <p>Текст какой-то</p>
            </div>
            <div className="main__dicription-block">
              <p>Текст какой-то</p>
            </div>
          </div>
          <div className="main__choose">
            <div className="main__video">
              <img src="../src/assets/video/start.gif" alt="" width="700" height="192" />
              <div className="main__video-gradient"></div>
            </div>
            <div className="main__button-container">
              <div className="main__button"></div>
              <span>Создать проект</span>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  )
}

Main.propTypes = {

}

Main.defaultProps = {

}