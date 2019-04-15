import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import './TourList.scss';
import {tourData} from '../../tourData';

export default class TourList extends Component {

    state = {
        tours: tourData
    }

    removeTour = (id) => {
        //const {tours} = this.state;
        const sortedTours = this.state.tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    }
  render() {

    const ready = this.state.tours.map(item => <Tour key={item.id} info = {item} removeTour={this.removeTour}/>)
    return (
      <div>
        <section className='tourlist'>
            {ready}
        </section>
      </div>
    )
  }
}
