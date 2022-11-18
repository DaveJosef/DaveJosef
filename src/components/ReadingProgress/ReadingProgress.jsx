import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/theme/theme';

const Progress = styled.progress`

  &#reading::-webkit-progress-value {
    background: rgb(${props => props.theme.colorA});
  }

  &#reading::-webkit-progress-bar {
    background-color: rgb(${props => props.theme.colorB});
  }

  &#reading {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 2rem;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    background-color: rgb(${props => props.theme.colorA});
    z-index: 999;
    box-shadow: 0px .5rem rgb(${colors.DARK});
  }

`;

function ReadingProgress({ progress }) {
  return (
    <Progress id='reading' max="100" value={progress}></Progress>
  );
}

export default ReadingProgress;