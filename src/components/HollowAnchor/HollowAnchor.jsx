import styled from "styled-components";

export const HollowAnchor = styled.a`

    cursor: pointer;
    margin-left: 1rem;
    width: max-content;
    display: inline-flex;
    margin: .5rem;
    line-height: 100%;
    text-align: center;
    color: rgb(${props => props.theme.colorA});
    background-color: transparent;
    text-decoration: none;
    padding: 1rem;
    border: 4px solid rgb(${props => props.theme.colorA});
    border-radius: .5rem;
    -webkit-transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);
    transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);

    &:visited {
        color: rgb(${props => props.theme.colorA});
    }

    &:hover {
        background-color: rgb(${props => props.theme.colorA});
        color: white;
    }
`;
