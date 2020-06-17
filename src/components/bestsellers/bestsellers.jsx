import React from 'react'
import { render } from 'react-dom'
import './style.scss';

const Clothes = (props) => {
    console.log(props)
    return (
        <div>
            <img src={props.item.img} />
            <span className="name">{props.item.name}</span>
            <span className="cost">{'$ ' + props.item.cost}</span>
        </div>
    )
}
class Bestsellers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clothes: [{
                img: "./img/Rectangle.png",
                name: 'Jacket',
                cost: 120
            },
            {
                img: "./img/Rectangle 3.png",
                name: 'Overalls',
                cost: 140
            },
            {
                img: "./img/Rectangle 3.1.png",
                name: 'Jacket',
                cost: 90
            },
            {
                img: "./img/Rectangle 3.3.png",
                name: 'Overalls',
                cost: 160
            }]
        }
    }

    render() {
        return (
            <>
                <h2>Bestsellers</h2>
                <div className="price">
                    {this.state.clothes.map((item, index) =>
                        <Clothes item={item} key={`${item.nameCity}-${index}`} />
                    )}
                </div>
                <span className='view'>View all</span>
            </>
        )
    }
}
