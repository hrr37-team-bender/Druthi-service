import React from 'react';
import styled from 'styled-components';

//

const Box = styled.div`
    height: 32px;
    width: 32px;
    border: ${({id, displayImageId }) => id.toString() === displayImageId.toString() ? '2px solid red' : '1px solid black'};
    padding: 5px;
    margin-left: 10px;
  `;
const Img = styled.img`
    width: 100%;
    height: -webkit-fill-available;
  `;

var Carousel = ({ image, displayImageId }) => {
  return (
    <Box id={image.id} displayImageId={displayImageId}>
      <Img src={image.image_url} />
    </Box>
  );
};

export default Carousel;