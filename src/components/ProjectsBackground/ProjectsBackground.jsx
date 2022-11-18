import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/theme/theme';

const ImageContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(${colors.DARKER});
  
  img {
    width: 100%;
  }
`;

function ProjectsBackground({ src, alt }) {
  return (
    <ImageContainer>
      <img src={src} alt={alt} />
    </ImageContainer>
  );
}

export default ProjectsBackground;