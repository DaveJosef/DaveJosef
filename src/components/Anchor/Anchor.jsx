import styled from "styled-components";

export const Anchor = styled.a`

    margin-left: 1rem;
    width: max-content;
    display: inline-block;
    margin: .5rem;
    line-height: 100%;
    text-align: center;
    color: white;
    box-shadow: black;
    background-color: rgb(${props => props.theme.colorA});
    text-decoration: none;
    padding: 1rem;
    border-radius: .5rem;
    -webkit-transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);
    transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);

    &:hover {
        transform: translateY(-20px) scale(1.3);
        background-color: rgb(${props => props.theme.colorB});
        box-shadow: 0 .5rem rgb(${props => props.theme.colorA});
    }

    img {
        width: 1.5rem;
        filter: invert();
    }
`;
