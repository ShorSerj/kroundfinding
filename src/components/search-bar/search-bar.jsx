import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import style from './style.scss'

export class SearchBar extends React.Component {
  handleClickSearch = (e) => {
    e.preventDefault()
    console.log('111111111')
  }

  render() {
    return (
      <div className="search-bar">
        <form action="" method="get">
          <input name="s" placeholder="Искать здесь..." type="search" />
          <button
            className={`search-bar__button`}
            type="button"
            aria-expanded="false"
            aria-controls="search__input"
            onClick={this.handleClickSearch}
          >
            -
            <svg className="menu__icon" aria-hidden="false" width="32" height="32">
              <use className="menu__icon-menu" href="/src/assets/images/sprite.svg#menu"></use>
              <use className="menu__icon-cross" href="/src/assets/images/sprite.svg#cross"></use>
            </svg>

          </button>
        </form>
      </div>
    )
  }

}

SearchBar.propTypes = {

}

SearchBar.defaultProps = {

}
