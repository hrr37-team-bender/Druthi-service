import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  margin-left: 10px;
  width: 31%;
`;
const Img = styled.img`
  width: 100%;
`;

var DisplayImage = ({ image }) => {
  return (
    <Box>
      <Img src={image.image_url}/>
    </Box>
  );
};

export default DisplayImage;