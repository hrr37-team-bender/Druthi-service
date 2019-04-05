import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 31%;
  height: 300px;
  position:relative
  z-index:-1;
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
`;
const RightButton = styled(Button)`
  margin-left:26.4%;
`;
const LeftButton = styled(Button)`
  margin-left:1%;
`;

var DisplayImage = ({ image }) => {
  return (
    <div>
      <Box>
        <a href={image.image_url}>
          <Img src={image.image_url}/>
        </a>
      </Box>
      <CarouselButtons>
        <LeftButton>&#10094;</LeftButton>
        <RightButton>&#10095;</RightButton>
      </CarouselButtons>

    </div>
  );
};

export default DisplayImage;