import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import {ModalIMG, ModalContainerStyle, ModalActiveImageStyle, ModalProductNameStyle, ModalCarouselStyle} from './styleFile.jsx'


class ModalCarousel extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      productName: this.props.productName,
      images: this.props.images,
      activeImage: this.props.activeImage,
    }
    this.carouselOnClick = this.carouselOnClick.bind(this)
    this.activeOnClick = this.activeOnClick.bind(this)
  }

  carouselOnClick(event) {
    this.setState({
      activeImage: event.target.src
    })
    this.render()
  }

  activeOnClick() {
    console.log('this will zoom')
  }

  render () {
    return (
      <ModalContainerStyle>
        <ModalProductNameStyle>
          {this.state.productName}
        </ModalProductNameStyle>
        <ModalActiveImageStyle>
          <img src={this.state.activeImage}  onClick={this.activeOnClick} width="600" height="600" />
        </ModalActiveImageStyle>
        <ModalCarouselStyle>
        {this.state.images.map((image) => {
            return (
              <ModalIMG src={image} onClick={this.carouselOnClick}/>
            )
          })}
        </ModalCarouselStyle>
      </ModalContainerStyle>
    )
  }
}

export default ModalCarousel;