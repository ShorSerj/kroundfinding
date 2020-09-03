import React from 'react'
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [55.858902, 49.109138],
  zoom: 13,
};

const coordinates = [
  [55.858902, 49.109138]
];

export class YandexMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        <YMaps>
          <Map defaultState={mapData} width='100%' height='100%'>
            {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
          </Map>
        </YMaps>

      </>
    )
  }
}