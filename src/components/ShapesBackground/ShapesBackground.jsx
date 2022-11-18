import React from 'react';
import Circle from '../../assets/shapes/Circle/Circle';
import Triangle from '../../assets/shapes/Triangle/Triangle';
import Hexagon from '../../assets/shapes/Hexagon/Hexagon';
import styled from 'styled-components';

const BackgroundDiv = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    z-index: -999;
    background-color: var(--DARK);
    
    svg {
      position: absolute;
      left: 0;
      animation: 3s linear rotate infinite, 9s linear slide infinite;
      top: 20vh;
      width: 30vh;
      height: auto;
    }
    
    svg:nth-child(2) {
      animation: 2s linear rotate infinite, 8s linear slide infinite;
      top: 5vh;
      width: 40vh;
      height: auto;
    }
    
    svg:nth-child(3) {
      animation: 4s linear rotate infinite, 6s linear slide infinite;
      top: 50vh;
      width: 61.8vh;
      height: auto;
    }
    
    @keyframes slide {
      0% {
        translate: -150vw;
      }
      100% {
        translate: 150vw;
      }
    }
    
    @keyframes rotate {
      from {
        rotate: 0deg;
      }
      to {
        rotate: 360deg;
      }
    }
    
`;

function ShapesBackground({ theme }) {
  return (
    <BackgroundDiv className="shapes">
        <Triangle theme={theme} />
        <Circle type={1} />
        <Hexagon theme={theme}/>
        <Circle type={0} />
        <Circle type={2} />
    </BackgroundDiv>
  );
}

export default ShapesBackground;