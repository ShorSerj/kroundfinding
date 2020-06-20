import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { About, Catalog, Categoty, Contacts, Good, Main } from './pages'
import { store } from './__data__'


import "./styles/index.scss";

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/about' component={About} />
                <Route exact path='/catalog' component={Catalog} />
                <Route exact path='/catalog/category' component={Categoty} />
                <Route path='/catalog/category/good' component={Good} />
                <Route path='/contacts' component={Contacts} />
            </Switch>
        </>
    )
}

render(
    <Provider>
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))
