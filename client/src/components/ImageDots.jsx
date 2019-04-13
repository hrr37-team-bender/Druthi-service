import React from 'react';
import styled from 'styled-components';
import Dot from './Dot.jsx';


const Div = styled.div`
  margin-left: 38%;
`;
var ImageDots = ({images, displayImage}) => {
  return (
    <Div>
      {images.map((image, index) => {
        return <Dot displayImage={displayImage} image={image} key={index} />;
      })}
    </Div>
  );
};

export default ImageDots;