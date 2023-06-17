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

    svg {
        height: 32px;
        fill: rgb(${props => props.theme.foreground});
        circle.svg-builder-circle {
            fill: rgb(${props => props.theme.foreground});
        }
        path {
            stroke: rgb(${props => props.theme.background});
        }
        path.svg-stroke-primary {
            stroke: rgb(${props => props.theme.background});
        }
    }
    svg:hover {
      cursor: pointer;
        height: 32px;
        fill: rgb(${props => props.theme.background});
        circle.svg-builder-circle {
            fill: rgb(${props => props.theme.foregroundB});
        }
    }
    svg.hollow:hover {
        height: 32px;
        fill: rgb(${props => props.theme.foregroundB});
        circle.svg-builder-circle {
            fill: rgb(${props => props.theme.foregroundB});
        }
        path {
            fill: rgb(${props => props.theme.foregroundB});
        }
        path.svg-stroke-primary {
            fill: rgb(${props => props.theme.foregroundB});
        }
    }

    @media screen and (max-width: 720px) {
    
        margin-top: 1rem;
        margin-left: 0;
        font-size: 1rem;
        
    }

`;

function IconAnchor({ src, href, alt, target, rel, children }) {
  return (
    <Anchor href={href} target={target} rel={rel}>{ children }</Anchor>
  );
}

export default IconAnchor;