import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import axios from 'axios';
import Carousel from './carousel.jsx'
import ActiveImage from './activeImage.jsx'
import modal from './modal.jsx'
import Container from './flexBox.jsx'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      activeImage: ''
    }
    this.changeActive = this.changeActive.bind(this)

  }

  componentDidMount() {
    var random = Math.floor(Math.random() * Math.floor(100))
    this.getImages(random);
  }

  getImages(val) {
    axios.get(`/api/product/${val}`)
    .then(response => {
      this.setState({
        images: response.data[0].images,
        activeImage: response.data[0].images[0]
      })
    })
  }

  changeActive(image) {
    this.setState({
      activeImage: image
    })
    this.render()
  }

  render(){
    return(
    <Container>
      <Carousel images={this.state.images} changeActive={this.changeActive}/>
      <ActiveImage activeImage={this.state.activeImage}/>
    </Container>
    )
  }
}

export default App;