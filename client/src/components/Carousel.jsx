import React from 'react';
import SmallImage from './SmallImage.jsx';
import styled from 'styled-components';

var Div = styled.div`
  display:flex;
`;

var Carousel = () => {
  return (
    <Div>
      <SmallImage />
      <SmallImage />
      <SmallImage />
    </Div>
  );
};

export default Carousel;