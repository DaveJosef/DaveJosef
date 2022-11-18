import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon/Icon';

const Anchor = styled.a`

    display: flex;
    text-decoration: none;

    img {
        border-radius: 50%;
        width: 32px;
    }

    @media screen and (max-width: 720px) {
    
        margin-top: 1rem;
        margin-left: 0;
        font-size: 1rem;
        
    }

`;

function IconAnchor({ src, href, alt, target, rel }) {
  return (
    <Anchor href={href} target={target} rel={rel}><Icon src={src} alt={alt}/></Anchor>
  );
}

export default IconAnchor;