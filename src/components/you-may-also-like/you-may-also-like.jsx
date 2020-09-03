import React from 'react'
import './style.scss';
import { Clothes } from '../clothes'

export class YouMayAlsoLike extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clothes: [{
                img: "./img/image 4.png",
                id: 123,
                name: 'Jacket',
                cost: 120,
                size: 'M',
                color: 'red',
            },
            {
                img: "./img/image 5.png",
                id: 112323,
                name: 'Overalls',
                cost: 140,
                size: 'S',
                color: 'black',
            },
            {
                img: "./img/image 22.png",
                id: 2443,
                name: 'Jacket',
                cost: 90,
                size: 'XL',
                color: 'green',
            },
            {
                img: "./img/image 23.png",
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
            <div className="youMayAlsoLike">
                <div className="youMayAlsoLike-title">
                    <h2>Вам также может понравиться</h2>
                    <a className='view-all'>Смотреть все</a>
                </div>
                <div className="other-products">
                    {this.state.clothes.map((item, index) =>
                        <Clothes item={item} key={`${item.nameCity}-${index}`} />
                    )}
                </div>

            </div>
        )
    }
}
