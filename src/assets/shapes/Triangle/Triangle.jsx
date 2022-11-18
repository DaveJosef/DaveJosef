import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`

  animation: 3s linear rotate infinite, 9s linear slide infinite;
  top: 20vh;
  width: 30vh;
  height: auto;
  
`;

function Triangle({ theme }) {
  return (
    <Svg width="174" height="150" viewBox="0 0 174 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M87 0L173.603 150H0.397461L87 0Z" fill={`rgb(${theme.colorA})`}/>
    </Svg>
  );
}

export default Triangle;