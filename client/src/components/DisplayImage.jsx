import React from 'react';
import styled, {keyframes} from 'styled-components';
import _ from 'lodash';
import ImageDots from './ImageDots.jsx';

const Container = styled.div`
  max-width:-webkit-fill-available;
  display:flex;
  flex-direction:column;
`;

const Box = styled.div`
  width: 310px;
  height: 300px;
  position:relative
  z-index:0;
  overflow:hidden;
`;

let animations = (indexes) => {
  let from = -indexes.prevIndex * 100;
  let to = -indexes.currentIndex * 100;
  return keyframes`
  from { left: ${from}%; }
  to { left: ${to}%; }
`;
};

const ButtonImageContainer = styled.div`
  display: flex;
`;

const ImagesHolder = styled.div`
  width: ${({length}) => (length * 310)}px;
  height: 300px;
  position:relative;
  margin: 0;
  left: -${({indexes}) => indexes.currentIndex * 100}%;
  text-align: left;
  animation: ${({indexes}) => animations(indexes)} ${({hover}) => hover ? 0 : 0.3 }s ;
  animation-delay:0s;
`;
const SliderImage = styled.img`
  float:left;
  margin: 0px;
  padding: 0px;
  height:300px;
  width:310px;
  border-radius: 7px;
`;

const Button = styled.span`
  font-size:32px;
  cursor:pointer;
  color:#000000a8;;
  opacity:0;
  ${Container}:hover & {
    opacity: 1;
  }
`;

const RightButton = styled(Button)`
  // margin-left:27.4%;
  &:hover { opacity:0.3 }
  // z-index:1;
  margin-top: 36%;
`;
const LeftButton = styled(Button)`
  // margin-left:1%;
  &:hover { opacity:0.3 }
  // z-index:1;
  margin-top: 36%;
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
    var { images, hoverSmallImage, image, onClickLeft, onClickRight } = this.props;
    return (
      <Container>
        <ButtonImageContainer>
          <LeftButton onClick={onClickLeft}>&#10094;</LeftButton>
          <Box>
            <ImagesHolder hover={hoverSmallImage} indexes = {{prevIndex, currentIndex}} length={images.length}>
              {images.map((image, key) => {
                return <SliderImage key={key} src={image.image_url}></SliderImage>;
              })}
            </ImagesHolder>
          </Box>
          <RightButton onClick={onClickRight}>&#10095;</RightButton>
        </ButtonImageContainer>
        <ImageDots displayImage={image} images={images}/>
      </Container>
    );
  }
}

export default DisplayImage;