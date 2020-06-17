import React from 'react'
import { Link } from 'react-router-dom'

export class Catalog extends React.Component {
    render() {
        return (
            <>
                <h1>Catalog</h1>
                <Link to='/catalog/category/good'>Good</Link>
            </>
        )
    }
}