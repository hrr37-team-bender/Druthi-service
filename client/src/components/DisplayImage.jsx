import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  margin-left: 10px;
  width: 31%;
`;
const Img = styled.img`
  width: 100%;
`;

var DisplayImage = () => {
  return (
    <Box>
      <Img src='http://lorempixel.com/640/480/cats/'/>
    </Box>
  );
};

export default DisplayImage;