import React, {Component} from 'react';
import Carousel from './Carousel.jsx';
import DisplayImage from './DisplayImage.jsx';
import styled from 'styled-components';

var MainContainer = styled.div`
  box-sizing: content-box;
  background-color: white;
  width: 1000px;
    margin: auto;
    background-color: #ffffff;
    box-shadow: 1em 0 1em -1em #ccc, -1em 0 1em -1em #ccc;
    padding-left: 20px;
    padding-right: 20px;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MainContainer>
        <DisplayImage />
        <Carousel />
      </MainContainer>
    );
  }
}
export default App;