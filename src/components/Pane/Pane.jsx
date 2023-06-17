import styled from "styled-components";
import { colors } from "../../utils/theme/theme";
import { motion } from "framer-motion";

export const Pane = styled(motion.div)`

    background-color: rgb(${props => props.theme.background});
    position: relative;
    width: 80vw;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;
    padding: 2rem;
    border-radius: 1rem;
    list-style: none;
    box-shadow: 0px 1rem rgb(${colors.DARKER});
    backdrop-filter: blur(7px);
    ${props => !props.reducedMotion && `
        -webkit-transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);
        transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);
        transition: transform 0.2s ease-out;
    `}

    &.transparent {
        background-color: rgba(${props => props.theme.background}, 0.3);
        ${props => !props.reducedMotion && `
            -webkit-transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);
            transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);
        `}
    }

    > p {
        line-height: 2rem;
        text-align: center;
        margin: 1rem 0;
        width: 80%;
    }

`;
