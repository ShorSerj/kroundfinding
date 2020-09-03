import React from 'react'
import './style.scss'

export class Adres extends React.Component {
    render() {
        return (
            <div className="adress__text" >
                <h2>Contacts</h2>
                <div> ООО "I belive i can fly"</div>
                <div>Адрес: 428033, Россия, РТ, г. Казань, Монтажный проезд, 3</div>
                <div>Юридический адрес: 42824,РТ, г. Казань, Монтажный проезд, д. 3, пом. 1</div>
                <div>Телефон/факс: +7(8242) 23-12-67</div>
                <div>E-mail: some@some.ru</div>
            </div>
        )
    }
}