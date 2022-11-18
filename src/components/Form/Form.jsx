import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/theme/theme';

const StyledForm = styled.form`

    display: flex;
    flex-direction: column;
    font-size: 2rem;
    padding: 1rem;
    list-style: none;
    line-height: 2.6rem;
    justify-content: space-around;
    align-items: center;
    border-radius: 1rem;
    background-color: rgb(${props => props.theme.dark ? colors.LIGHT : colors.LIGHT2});
    backdrop-filter: blur(7px);

    input, textarea {
        display: flex;
        border: 4px solid rgb(${colors.DARK});
        border-radius: .5rem;
        margin-bottom: 2.5vw;
        padding: 1rem;
        font-size: 1rem;
        font-family: inherit;
        color: rgb(${colors.LIGHT});
    }

    input, label, textarea {
        width: 60vw;
    }

    input#message {
        height: 25vh;
    }

    button[type=submit]:hover {
        cursor: pointer;
        background-color: rgb(${props => props.theme.colorB});
    }

    button[type=submit] {
        width: 25vw;
        font-size: 1rem;
        padding: 1rem;
        border: none;
        color: white;
        font-weight: bold;
        border-radius: .5rem;
        background-color: rgb(${props => props.theme.colorA});
    }

    @media screen and (max-width: 480px) {
        
        font-size: 1.5rem;

        input {
            margin-bottom: 5vw;
        }
        
        input, label, textarea {
            width: 50vw;
        }
        
        input#message {
            height: 25vw;
        }
            
        button[type=submit] {
            width: auto;
            font-size: 1rem;
            padding: 1rem;
            border: none;
            color: white;
            font-weight: bold;
            border-radius: .5rem;
            background-color: rgb(${props => props.theme.colorA});
        }

        @media screen and (max-width: 320px) {

            button[type=submit] {
                font-size: auto;
            }

        }

    }

`;

function Form({ children, onSubmit, method }) {
  return (
    <StyledForm method={method} onSubmit={onSubmit}>{children}</StyledForm>
  );
}

export default Form;