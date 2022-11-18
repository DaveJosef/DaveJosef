import React from 'react';
import styled from 'styled-components';

const Segment = styled.div`

  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw 0;
  
`;

function Section({ children, className, id }) {
  return (
    <Segment className={className} id={id}>{children}</Segment>
  );
}

export default Section;