import styled from "styled-components";

export const Title = styled.h2`

    font-size: 3rem;
    margin: 1rem 0;

    ::before {
        color: rgb(${props => props.theme.colorA});
        content: '- ';
    }
    
    ::after {
        color: rgb(${props => props.theme.colorB});
        content: ' -';
    }

    @media screen and (max-width: 720px) {

        font-size: 2rem;

    }
    
    @media screen and (max-width: 480px) {

        font-size: 1.25rem;

    }
    
    @media screen and (max-width: 240px) {

        font-size: 1rem;

    }
`;
