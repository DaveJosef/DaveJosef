import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../utils/theme/theme';

function Circle({ type }) {

  const getColor = () => {
    if (type === 0) {
      return colors.LIGHT2;
    }
    
    if (type === 1) {
      return colors.LIGHT3;
    }

    if (type === 2) {
      return colors.DARK;
    }
  }

  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill={`rgb(${getColor()})`} />
    </svg>
  );
}

export default Circle;