import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/theme/theme';
import { motion, useScroll, useSpring } from 'framer-motion';

const ProgressBG = styled.div`
  height: 2rem;
  background: rgb(${props => props.theme.colorB});
  z-index: 999;
  box-shadow: 0px .5rem rgb(${colors.DARK});
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform-origin: 0%;
`;

const ProgressNew = styled(motion.div)`
  background: rgb(${props => props.theme.colorA});
  transform-origin: inherit;
  height: inherit;
`;

function ReadingProgress() {
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress)

  return (
    <ProgressBG>
      <ProgressNew style={{scaleX}} />
    </ProgressBG>
  );
}

export default ReadingProgress;