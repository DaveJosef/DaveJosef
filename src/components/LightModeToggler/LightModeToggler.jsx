import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as MoonIcon } from '../../assets/icons/svg/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/svg/sun.svg';

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

    svg {
        circle.svg-builder-circle {
            fill: rgb(${props => props.theme.foreground});
        }
        path.svg-stroke-primary {
            stroke: rgb(${props => props.theme.background});
        }
    }
    svg:hover {
        circle.svg-builder-circle {
            fill: rgb(${props => props.theme.background});
        }
        path.svg-stroke-primary {
            stroke: rgb(${props => props.theme.foregroundB});
        }
    }

`;

function LightModeToggler({ handleToggleMode, mode }) {

    const checkBoxRef = useRef(null);

    const handleClick = () => {
        handleToggleMode(checkBoxRef.current.checked);
    }

  return (
    <Button>
        <label onClick={handleClick} htmlFor="light-mode">
            {mode === "DARK" ? <SunIcon /> : <MoonIcon />}
        </label>
        <input ref={checkBoxRef} type="checkbox" name="light-mode" id="light-mode" />
    </Button>
  );
}

export default LightModeToggler;