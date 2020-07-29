import React from 'react'
import PropTypes from 'prop-types'

import { Logo } from '../logo'

import style from './style.scss'

export const Footer = (props) => {

    return (<div className="footer">
        <Logo
            color="white"
            size={22}
        />
        <ul className="footer__nav">
            <li><a href="#" className="footer__nav_link">Каталог</a></li>
            <li><a href="#" className="footer__nav_link">Доставка</a></li>
            <li><a href="#" className="footer__nav_link">Карта сайта</a></li>
            <li><a href="#" className="footer__nav_link">Контакты</a></li>
        </ul>
        <ul className="footer__socnet">
            <li><a href="#" className="footer__socnet_link icon-facebook"></a></li>
            <li><a href="#" className="footer__socnet_link icon-instagram"></a></li>
            <li><a href="#" className="footer__socnet_link icon-pinterest"></a></li>
            <li><a href="#" className="footer__socnet_link icon-twitter"></a></li>
        </ul>
    </div>)
}

Footer.propTypes = {

}

Footer.defaultProps = {

}