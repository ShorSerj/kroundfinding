import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

<<<<<<< HEAD
import { About, Catalog, Categoty, Contacts, Good, Main, Page404, Cart } from './pages'
=======
import { About, Catalog, Categoty, Contacts, Good, Main } from './pages'
>>>>>>> <home work>-<add good color and size>
import configStore from './__data__/store'

const store = configStore()

import "./styles/index.scss";

const App = () => {
    return (
        <>
            <Switch>
<<<<<<< HEAD
                <Route exact path='/' component={Main} />
                <Route path='/cart' component={Cart} />
=======
                <Route exact path='/' component={Good} />
>>>>>>> <home work>-<add good color and size>
                <Route path='/about' component={About} />
                <Route exact path='/catalog' component={Good} />
                <Route exact path='/catalog/category' component={Categoty} />
                <Route path='/catalog/category/good' component={Good} />
                <Route path='/contacts' component={Contacts} />
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