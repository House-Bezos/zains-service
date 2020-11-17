import React from 'react';
import ReactDOM from 'react-dom';

class CarouselItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
       <img src={this.props.image} width="40" height="50" />
      </div>
    )
  }
}

export default CarouselItem