import React from 'react'
import './style.scss'
import { Import, ButtonSubmite } from '../../components'


export class Question extends React.Component {
    render() {
        return (
            <form className="question__container">
                <div className="question__message">
                    <h2>Задайте нам вопрос</h2>
                    <Import type="text" id="us ername" placeholder='Имя Фамилия' />
                    <Import type="email" id="email" placeholder='Email' />
                    <Import type="text" id="usersAsk" placeholder='Ваш вопрос' />
                    <ButtonSubmite>Отправить</ButtonSubmite>
                </div>
            </form>
        )
    }
}