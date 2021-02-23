import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main, Page404 } from './pages'
import configStore from './__data__/store'

const store = configStore()

import "./styles/index.scss";

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route component={Page404} />
            </Switch>
        </>
    )
}

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))