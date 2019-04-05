import React from 'react';
import SmallImage from './SmallImage.jsx';
import styled from 'styled-components';

var Div = styled.div`
  display:flex;
  margin-top: 40px;
  margin-left: 53px;
`;

var Carousel = ({ images, displayImageId, onClick, mouseOverUpdate, changeImageBack }) => {
  return (
    <Div>
      {images.map((image, key) => {
        return <SmallImage mouseOverUpdate={mouseOverUpdate} changeImageBack={changeImageBack} onClick={onClick} displayImageId={displayImageId} key={key} image = {image}/>;
      })}
    </Div>
  );
};

export default Carousel;