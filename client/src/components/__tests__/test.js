import React from 'react';
import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DisplayImage from '../DisplayImage.jsx';
import SmallImage from '../SmallImage.jsx';
import Carousel from '../Carousel.jsx';
import App from '../App.jsx';
import index from '../../index.jsx';
//import axios from 'axios';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  test('should render', () => {
    const Wrapper = shallow(<App />);
    expect((Wrapper).exists()).toBe(true);
  });
});
let image = { 'id': 81420, 'image_url': 'http://lorempixel.com/640/480/cats'};
let images = [{"id":81420,"image_url":"https://s3.ap-south-1.amazonaws.com/deepfryd/images/images (11).jpg"},{"id":81420,"image_url":"https://s3.ap-south-1.amazonaws.com/deepfryd/images/images (12).jpg"},{"id":81420,"image_url":"https://s3.ap-south-1.amazonaws.com/deepfryd/images/images (13).jpg"},{"id":81420,"image_url":"https://s3.ap-south-1.amazonaws.com/deepfryd/images/images (14).jpg"}];


describe('Display image', () => {
  it('should display large image', () => {
    const Wrapper = render(<DisplayImage images={images} image={images[0]} hoverSmallImage={true}/>);
    expect(Wrapper.find('img').prop('src')).toEqual(images[0].image_url);
  });

  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  it('should update the display image with the hovered image', () => {
    wrapper.setState({
      smallImages: images,
      displayImage: images[0],
      selectedImage: images[0]
    });
    expect(wrapper.state('hover')).toBe(false);
    expect(wrapper.state('displayImage')).toBe(images[0]);
    instance.mouseOverUpdate(images[1]);
    expect(wrapper.state('hover')).toBe(true);
    expect(wrapper.state('displayImage')).toBe(images[1]);
  });

  it('should update the selected image onClick', () => {
    wrapper.setState({
      smallImages: images,
      displayImage: images[0],
      selectedImage: images[0]
    });
    expect(wrapper.state('selectedImage')).toBe(images[0]);
    instance.changeImage(images[1]);
    expect(wrapper.state('selectedImage')).toBe(images[1]);
    expect(wrapper.state('displayImage')).toBe(images[1]);
  });

  it('should change display image to next image on clicking right button', () => {
    wrapper.setState({
      smallImages: images,
      displayImage: images[0],
      selectedImage: images[0]
    });
    expect(wrapper.state('selectedImage')).toBe(images[0]);
    instance.onClickRight();
    expect(wrapper.state('selectedImage')).toBe(images[1]);
    expect(wrapper.state('displayImage')).toBe(images[1]);
  });

});

