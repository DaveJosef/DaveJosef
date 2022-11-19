import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../utils/theme/theme';

const Button = styled.div`
    display: flex;
    color: rgb(${props => props.theme.foreground});
    width: 40vw;
    height: 100px;
    border-radius: .5rem;
    overflow: hidden;
    border: 4px solid rgb(${props => props.theme.colorB});
    ${props => props.theme.darkMode ? css`
        background-color: rgb(${colors.DARK});
    ` : css`
        background-color: #FFF;
    `}
    box-shadow: inset 0 -.5rem 0 rgb(${colors.DARKER});

    > label {
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        display: inherit;
        background-color: rgba(${props => props.theme.colorB}, 0.5);
        color: rgb(${props => props.theme.foreground});
        cursor: pointer;
    }

    > input {
        opacity: 0;
        position: absolute;
        width: inherit;
        height: inherit;
        z-index: -9;
    }

    &:active {
        height: 90px;
        box-shadow: inset 0 -.25rem 0 rgb(${colors.DARKER});
    }

`;

function ReadMoreButton({ handleReadMore, language }) {

    const checkBoxRef = useRef(null);
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        handleReadMore();
        setChecked(true);
    }

  return (
    <>
        {!checked && 
            <Button>
                <label onClick={handleClick} htmlFor="read">
                    {language !== "portuguese" ? "See more" : "Ver mais"}
                </label>
                <input ref={checkBoxRef} type="checkbox" name="read" id="read" />
            </Button>
        }
    </>
  );
}

export default ReadMoreButton;