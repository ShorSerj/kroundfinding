import React from 'react'
import { render } from 'react-dom'

import { About, Catalog, Categoty, Contacts, Good, Main } from './pages'

import "./styles/index.scss";

const App = () => {
    return (
        <>
            <Main />
        </>
    )
}

render(<App />, document.getElementById('root'))
