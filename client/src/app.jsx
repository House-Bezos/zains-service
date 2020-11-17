import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Carousel from './carousel.jsx'
import modal from './modal.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    var random = Math.floor(Math.random() * Math.floor(100))
    this.getImages(random);

  }

  getImages(val) {
    axios.get(`/api/product/${val}`)
    .then(response => {
      this.setState({
        images: response.data[0].images
      })
    })
  }

  render(){
    return(
    <div>
      <Carousel images={this.state.images}/>
    </div>
    )
  }
}

export default App;