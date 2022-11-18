import styled, { css } from "styled-components";

export const Icon = styled.img`
    ${props => props.theme.dark && css`
        filter: invert();
    `}
`;
