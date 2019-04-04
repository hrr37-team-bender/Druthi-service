import React, {Component} from 'react';
import Carousel from './Carousel.jsx';
import DisplayImage from './DisplayImage.jsx';
import styled from 'styled-components';
import axios from 'axios';
let mode = 'development';
let url = {
  production: '',
  development: 'http://localhost:3001'
};

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
    this.state = {
      smallImages: [],
      displayImage: ''
    };
    this.changeImage = this.changeImage.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `${url[mode]}/images/81420`,
      'content-type': 'application/json'
    })
      .then((response) => {
        this.setState({
          smallImages: response.data,
          displayImage: response.data[0]
        });
      });
  }

  changeImage(image) {
    this.setState( {
      displayImage: image
    });
  }

  render() {
    return (
      <MainContainer>
        <DisplayImage image={this.state.displayImage}/>
        <Carousel onClick={this.changeImage} displayImageId = {this.state.displayImage.id} images={this.state.smallImages}/>
      </MainContainer>
    );
  }
}
export default App;