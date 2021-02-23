import React from 'react'

import { Header, Footer} from '../../components'

import style from './style.scss'

export class Page404 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div id="error-page">
                    <div className="content">
                        <h1 data-text="404">404</h1>
                        <h4 data-text="Opps! Страница не найдена">Opps! Страница не найдена</h4>
                        <p>Страницы, которую вы ищете, не существует. Если думаете, что что-то сломано, сообщите о проблеме.</p>
                        <div className="btns">
                            <a href="/">Вернуться на главную</a>
                            <a href="/">Сообщить о проблеме</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}