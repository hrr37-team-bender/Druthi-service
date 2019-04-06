import React from 'react';
import styled, {keyframes} from 'styled-components';

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
  margin-left:26.4%;
  &:hover { opacity:0.3 }
`;
const LeftButton = styled(Button)`
  margin-left:1%;
  &:hover { opacity:0.3 }
`;

const animations = keyframes`
  0% { left: 0%; }
  20% { left: 0%; }
  25% { left: -100%; }
  45% { left: -100%; }
  50% { left: -200%; }
  70% { left: -200%; }
  75% { left: -300%; }
  95% { left: -300%; }
  100% { left: -400%; }
`;
const ImagesHolder = styled.div`
  width: ${({length}) => (length * 400)}px;
  height: 300px;
  position:relative;
  margin: 0;
  left: 0;
  text-align: left;
  animation: ${(({state}) => state ? 'running' : 'paused')} ${animations} 10s ;
  animation-delay:0s;
`;
const SliderImage = styled.img`
  float:left;
  margin: 0px;
  padding: 0px;
  height:300px;
  width:400px;
`;

var DisplayImage = ({ images, updateAnimationRun, animationRun, image, onClickLeft, onClickRight }) => {
  return (
    <div>
      <Box>
        <ImagesHolder onAnimationEnd={updateAnimationRun} state={animationRun} length={images.length}>
          {images.map((image, key) => {
            return <SliderImage index={key} key={key} src={image.image_url}></SliderImage>;
          })}
        </ImagesHolder>
      </Box>
      {/* <Box>
        <a href={image.image_url}>
          <Img src={image.image_url}/>
        </a>
      </Box>*/}
      <CarouselButtons>
        <LeftButton onClick={onClickLeft}>&#10094;</LeftButton>
        <RightButton onClick={onClickRight}>&#10095;</RightButton>
      </CarouselButtons>

    </div>
  );
};

export default DisplayImage;