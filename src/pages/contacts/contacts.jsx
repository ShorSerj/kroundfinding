import React from 'react'
import { YandexMap, Header, Footer, Adres, Question} from '../../components'

import style from './style.css'

export class Contacts extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="contacts">
                    <div className="contacts__item contacts__item-adres">
                        <Adres />
                    </div>
                    <div className="contacts__item contacts__item-question">
                        <Question />
                    </div>
                    <div className="contacts__item contacts__item-map">
                        <YandexMap />
                    </div>

                </div>
                <Footer />
            </>
        )
    }
}