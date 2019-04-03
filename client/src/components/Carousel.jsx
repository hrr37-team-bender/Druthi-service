import React from 'react';
import SmallImage from './SmallImage.jsx';
import styled from 'styled-components';

var Div = styled.div`
  display:flex;
  margin-top: 40px;
  margin-left: 53px;
`;

var Carousel = ({ images, displayImageId }) => {
  return (
    <Div>
      {images.map((image, key) => {
        return <SmallImage displayImageId={displayImageId} key={key} image = {image}/>;
      })}
    </Div>
  );
};

export default Carousel;