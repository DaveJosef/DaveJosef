import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import lightMode from '../../assets/icons/light_mode.png';
import nightMode from '../../assets/icons/night_mode.png';
import { Icon } from '../Icon/Icon';

const Button = styled.div`

    display: flex;
    width: 50px;
    height: 50px;
    background-color: rgb(${props => props.theme.background});
    border-radius: 50%;

    label {
        cursor: pointer;
        position: relative;
        width: 100%;
        height: 100%;
        display: inherit;
        color: rgb(${props => props.theme.foreground});
    }

    input {
        opacity: 0;
        position: absolute;
        width: inherit;
        height: inherit;
        z-index: -9;
    }

`;

function LightModeToggler({ handleToggleMode, mode }) {

    const checkBoxRef = useRef(null);

    const handleClick = () => {
        handleToggleMode(checkBoxRef.current.checked);
    }

    const getSrc = () => {
        return mode === "DARK" ? lightMode : nightMode;
    }

  return (
    <Button>
        <label onClick={handleClick} htmlFor="light-mode">
            <Icon src={getSrc()} alt="Light mode" />
        </label>
        <input ref={checkBoxRef} type="checkbox" name="light-mode" id="light-mode" />
    </Button>
  );
}

export default LightModeToggler;