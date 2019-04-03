import React from 'react';
import styled from 'styled-components';


const Box = styled.div`
    height: 32px;
    width: 32px;
    border: 1px solid black;
    padding: 5px;
    margin-left: 10px;
  `;
const Img = styled.img`
    width: 100%;
    height: -webkit-fill-available;
  `;

var Carousel = () => {
  return (
    <Box>
      <Img src="http://lorempixel.com/640/480/cats/" />
    </Box>
  );
};

export default Carousel;