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
  margin-left:50px;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smallImages: [],
      displayImage: {},
      selectedImage: {}
    };
    this.changeImage = this.changeImage.bind(this);
    this.mouseOverUpdate = this.mouseOverUpdate.bind(this);
    this.changeImageBack = this.changeImageBack.bind(this);
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
          displayImage: response.data[0],
          selectedImage: response.data[0]
        });
      });
  }

  changeImage(image) {
    this.setState( {
      displayImage: image,
      selectedImage: image
    });
  }

  mouseOverUpdate(image) {
    this.setState( {
      displayImage: image
    });
  }

  changeImageBack() {
    this.setState( {
      displayImage: this.state.selectedImage
    });
  }

  render() {
    return (
      <MainContainer>
        <DisplayImage image={this.state.displayImage}/>
        <Carousel selectedImageId={this.state.selectedImage.id} mouseOverUpdate={this.mouseOverUpdate} onClick={this.changeImage} displayImageId = {this.state.displayImage.id} changeImageBack={this.changeImageBack} images={this.state.smallImages}/>
      </MainContainer>
    );
  }
}
export default App;