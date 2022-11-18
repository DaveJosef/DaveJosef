import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/theme/theme';

const Main = styled.main`
    border-radius: 1rem;
    margin: .5rem;
    padding: .5rem;
    border: none;
    background-color: rgb(${props => props.theme.dark ? colors.LIGHT : colors.LIGHT2});

    h4 {
        margin: 1rem;
    }
    
    li {
        margin: 1rem 2rem;
    }
`;

function Expand(props) {

    const {title, subtitle, open} = props;

    return (
        <details open={open}>
            <summary>
                <p>{title}</p>
                <br/>
                <span>{subtitle}</span>
            </summary>
            <div>
                <Main>
                    {props.children}
                </Main>
            </div>
        </details>
    );
}

export default Expand;