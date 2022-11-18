import React from 'react';

function Hexagon({ theme }) {
  return (
    <svg width="201" height="209" viewBox="0 0 201 209" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100.766 0L200.766 58L200.766 154.818L100.766 209L0.766068 154.818L0.766052 58L100.766 0Z" fill={`rgb(${theme.colorB})`}/>
    </svg>
  );
}

export default Hexagon;