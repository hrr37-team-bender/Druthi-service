import React from 'react';
import SmallImage from './SmallImage.jsx';
import styled from 'styled-components';

var Div = styled.div`
  display:flex;
  margin-top: 40px;
  margin-left: 53px;
`;

var Carousel = ({ images, displayImageId, onClick }) => {
  return (
    <Div>
      {images.map((image, key) => {
        return <SmallImage onClick={onClick} displayImageId={displayImageId} key={key} image = {image}/>;
      })}
    </Div>
  );
};

export default Carousel;