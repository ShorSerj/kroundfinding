import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { Logo } from '../'

import style from './style.scss'

export const Header = (props) => {
  return (
    <div className="header">
      <span style={{ fontSize: '29px', color: 'white', margin: '0px 20px 0 15px' }}>
        <i className="fas fa-bars"></i>
      </span>
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__links">
        <NavLink className="header__business" to='/#' activeStyle={{ color: "white", textDecoration: "none" }}>Создать проект</NavLink>
        <NavLink className="header__travel" to='/#' activeStyle={{ color: "white", textDecoration: "none" }}>Поддержать проект</NavLink>
        <NavLink className="header__dream" to='/#' activeStyle={{ color: "white", textDecoration: "none" }}>Инвестировать</NavLink>
      </div>
      <div className="header__progects">
        <NavLink className="header__top" to='/#' activeStyle={{ color: "white", textDecoration: "none" }}>Тренды</NavLink>
        <NavLink className="header__new" to='/#' activeStyle={{ color: "white", textDecoration: "none" }}>Стартующие</NavLink>
      </div>
      <div className="header__user">
        <NavLink className="header__search" to='/#' activeStyle={{ color: "white", textDecoration: "none" }}>Поиск
            <span style={{ fontSize: '18px', color: 'white', margin: '0px 10px' }}>
              <i className="fas fa-search"></i>
            </span>
        </NavLink>
        <NavLink className="header__realized" to='/#' activeStyle={{ color: "white", textDecoration: "none" }}>Авторизоваться</NavLink>
      </div>
    </div>)
}

Header.propTypes = {

}

Header.defaultProps = {

}
const mapStateToProps = (state) => {

}
const mapDispatchToProps = (dispatch) => {

}
export const Logotype = connect(mapStateToProps, mapDispatchToProps)(Logo)