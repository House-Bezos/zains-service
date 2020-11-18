import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 65vw;
`;

export const ModalStyle = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  padding: 20px;
  width: 1200px;
  height: 600px;
 `;

 export const ModalContainerStyle = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 600px 200px 1fr;
  grid-template-rows: auto 1fr auto;
 `;
 export const ModalActiveImageStyle = styled.div`

 `;

 export const ModalProductNameStyle = styled.div`

 `;

 export const ModalCarouselStyle = styled.div`

 `;

export const BackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
`
export const CarouselIMG = styled.img`
  width: 40px;
  height: 50px;
  border: solid;
  border-color: teal;
  border-width: thin;
  border-radius: 5px;
  margin-right: 10px
`

export const ModalIMG = styled.img`
  width: 40px;
  height: 50px;
  border: solid;
  border-color: lightgray;
  margin: 5px;
`