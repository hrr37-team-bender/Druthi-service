import React from 'react';
import styled, {keyframes} from 'styled-components';
import _ from 'lodash';

const Box = styled.div`
  width: 400px;
  height: 300px;
  position:relative
  z-index:-1;
  overflow:hidden;
`;
const Img = styled.img`
  width: 100%;
  height: -webkit-fill-available;
`;
const CarouselButtons = styled.div`
  margin-top: -14%;
`;
const Button = styled.span`
  font-size:32px;
  cursor:pointer;
  color:#000000a8;
`;
const RightButton = styled(Button)`
  margin-left:27.4%;
  &:hover { opacity:0.3 }
`;
const LeftButton = styled(Button)`
  margin-left:1%;
  &:hover { opacity:0.3 }
`;

let animations = (indexes) => {
  let from = -indexes.prevIndex * 100;
  let to = -indexes.currentIndex * 100;
  return keyframes`
  from { left: ${from}%; }
  to { left: ${to}%; }
`;
};

const ImagesHolder = styled.div`
  width: ${({length}) => (length * 400)}px;
  height: 300px;
  position:relative;
  margin: 0;
  left: -${({indexes}) => indexes.currentIndex * 100}%;
  text-align: left;
  animation: ${({indexes}) => animations(indexes)} ${({hover}) => hover ? 0 : 1 }s ;
  animation-delay:0s;
`;
const SliderImage = styled.img`
  float:left;
  margin: 0px;
  padding: 0px;
  height:300px;
  width:400px;
`;

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevIndex: 0,
      currentIndex: 0
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.image.id) {
      let prevId = this.props.image.id.toString();
      let nextId = nextProps.image.id.toString();
      if (prevId !== nextId) {
        let prevIndex = _.findIndex(this.props.images, (image) => {
          return image.id.toString() === prevId;
        });
        let nextIndex = _.findIndex(nextProps.images, (image) => {
          return image.id.toString() === nextId;
        });
        this.setState({
          prevIndex,
          currentIndex: nextIndex
        });
      }
    }
  }
  render() {
    var { prevIndex, currentIndex } = this.state;
    var { images, animationRun, hoverSmallImage, image, onClickLeft, onClickRight } = this.props;
    return (
      <div>
        <Box>
          <ImagesHolder hover={hoverSmallImage} indexes = {{prevIndex, currentIndex}} state={animationRun} length={images.length}>
            {images.map((image, key) => {
              return <SliderImage key={key} src={image.image_url}></SliderImage>;
            })}
          </ImagesHolder>
        </Box>
        <CarouselButtons>
          <LeftButton onClick={onClickLeft}>&#10094;</LeftButton>
          <RightButton onClick={onClickRight}>&#10095;</RightButton>
        </CarouselButtons>
      </div>
    );
  }
}

export default DisplayImage;