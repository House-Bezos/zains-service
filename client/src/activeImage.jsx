import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


class ActiveImage extends React.Component {
  constructor(props){
    super(props)
    this.hoverHandler = this.hoverHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
 }

  hoverHandler(event) {
    console.log('This will zoom')
  }

  clickHandler() {
    this.props.toggleModal()
  }

  render() {
    return (
      <div>
        <img onClick={this.clickHandler} onMouseOver={this.hoverHandler} src={this.props.activeImage} width="600" height="600" />
      </div>
    )
  }
}

export default ActiveImage;