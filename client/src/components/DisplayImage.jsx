import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  margin-left: 10px;
  width: 31%;
  height: 300px;
`;
const Img = styled.img`
  width: 100%;
  height: -webkit-fill-available;
`;

var DisplayImage = ({ image }) => {
  return (
    <a href={image.image_url}><Box>
      <Img src={image.image_url}/>
    </Box>
    </a>
  );
};

export default DisplayImage;