import React from 'react'
import './style.scss';
import { Clothes } from '../clothes'

export class YouMayAlsoLike extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clothes: [{
                img: "./img/Rectangle.png",
                id: 123,
                name: 'Jacket',
                cost: 120,
                size: 'M',
                color: 'red',
            },
            {
                img: "./img/Rectangle 3.png",
                id: 112323,
                name: 'Overalls',
                cost: 140,
                size: 'S',
                color: 'black',
            },
            {
                img: "./img/Rectangle 3.1.png",
                id: 2443,
                name: 'Jacket',
                cost: 90,
                size: 'XL',
                color: 'green',
            },
            {
                img: "./img/Rectangle 3.3.png",
                id: 4533,
                name: 'Overalls',
                cost: 160,
                size: 'L',
                color: 'yelowgreen',
            }]
        }
    }

    render() {
        return (
            <>
                <h2>YouMayAlsoLike</h2>
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
