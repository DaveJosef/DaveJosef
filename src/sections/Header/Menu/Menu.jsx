import React from 'react';
import styled from 'styled-components';
import LanguageSelect from '../../../components/LanguageSelect/LanguageSelect';
import LightModeToggler from '../../../components/LightModeToggler/LightModeToggler';
import { getString, projects, sections } from '../../../utils/data/data';
import { colors } from '../../../utils/theme/theme';

const MenuBox = styled.div`

    padding: calc(2.5rem + 5vh) 0 5vh 0;
    background-color: rgb(${props => props.theme.background});
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    flex-wrap: nowrap;
    transition: 400ms ease-in-out 0s;
    border-bottom: 2px solid rgb(${props => props.theme.foreground});

    @media screen and (max-height: 600px) {
        padding: calc(2.5rem + 2vh) 0 2vh 0;
    }
    
    @media screen and (max-width: 720px) {

        height: fit-content;
        width: 360px;
        flex-direction: column;
        align-items: center;
        padding: 0;
        border-bottom: none;

    }

`;

const ContainerDiv = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;

    #toggle {
        display: none;
    }

    & #toggle {
        display: none;
        position: absolute;
        right: 2%;
        top: 2%;
        width: 10%;
        height: 10%;
    }
    
    & #toggle:checked ~ div {
        display: flex;
        border-radius: 0;
    }
    
    & > label.menu-icon {
        visibility: visible;
    }
    
    & details {
        margin-bottom: .5rem;
        background-color: inherit;
    }

    & details summary {
        cursor: pointer;
    }

    & details > ul {
        width: 100%;
        margin-left: 1rem;
        flex-direction: column;
        background-color: rgb(${props => props.theme.background});
        border-top: solid 2px rgb(${props => props.theme.foregroundB});
    }

    @media screen and (max-width: 720px) {
        
        justify-content: center;

        & label.menu-icon > div.trace {
            width: 8vw;
            height: 1.25vw;
            background-color: white;
            position: absolute;
            border-radius: 4px;
            transition: 0.5s ease-in-out;
        }
        
        & label.menu-icon {
            background-color: rgb(${colors.DARKER});
            height: 100px;
            width: 12.5vw;
            position: absolute;
            top: 2rem;
            right: 0;
            display: flex;
            justify-content: center;
            cursor: pointer;
            transition: 400ms ease-in-out 0s;
        }
        
        & #toggle:checked + label.menu-icon > div.trace:nth-child(1) {
            transform: rotate(45deg);
            top: 47px;
        }
        
        & #toggle:checked + label.menu-icon > div.trace:nth-child(2) {
            transform: translateX(-100px);
            width: 30px;
            visibility: hidden;
            opacity: 0;
        }
        
        & #toggle:checked + label.menu-icon > div.trace:nth-child(3) {
            transform: rotate(-45deg);
            top: 48px;
        }
        
        & label.menu-icon > div.trace:nth-child(1) {
            top: 26px;
            transform: rotate(0);
        }

        & label.menu-icon > div.trace:nth-child(2) {
            top: 46px;
            transform: rotate(0);
        }

        & label.menu-icon > div.trace:nth-child(3) {
            top: 66px;
            transform: rotate(0);
        }

        & #toggle:not(:checked) ~ div {
            display: none;
            border-radius: 100%;
        }
        
        & {
            align-items: center;
            padding-top: 0;
        }
        
        @media screen and (max-width: 240px) {

            & nav {
                font-size: 1rem;
                justify-content: flex-start;
            }

            & nav > ul {
                margin-left: 5vw;
            }

            & details {
                margin-bottom: auto;
            }

            & details > ul {
                margin-left: 1rem;
            }

        }

    }
   
`;

const Nav = styled.nav`

    background-color: rgb(${props => props.theme.background});
    color: rgb(${props => props.theme.foreground});
    visibility: visible;
    display: flex;
    flex-flow: row;
    font-size: 1.5rem;
    font-family: 'Josefin Sans', sans-serif;
    align-items: center;
    transition: 400ms ease-in-out 0s;

    & > ul {
        display: flex;
        padding-left: 3rem;
        align-items: center;
    }

    li {
        margin: 1rem;
        list-style-type: none;
        height: 100%;
        display: flex;
        width: fit-content;
    }

    details > ul {
        position: absolute;
        width: fit-content;
    }
    
    @media screen and (max-width: 720px) {
    
        width: 60vw;
        height: 60vh;
        overflow-y: scroll;
        justify-content: center;
        padding: 5vh 0 5vh 0;
        
        & ul {
            position: relative;
            padding-left: 0;
            width: auto;
            display: auto;
            flex-flow: column;
            justify-content: normal;
        }
        
        & li {
            margin-left: 0;
        }
        
        & details > ul {
            position: relative;
            border-top: none;
            width: auto;
        }
        
    }
    
    @media screen and (max-width: 240px) {

        font-size: 1rem;
        justify-content: flex-start;

        ul {
            margin-left: 5vw;
        }

   }

`;

const SettingsDiv = styled.div`

    display: flex;
    flex-direction: row;
    width: 200px;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
    background-color: inherit;

    select {
        height: 2rem;
        font-family: inherit;
    }

`;

function Menu({ language, handleSwitchTheme, handleChangeLanguage, actualTheme }) {
    
  return (
    <ContainerDiv>
        <input type="checkbox" name="toggle" id="toggle"/>
        <label className='menu-icon' htmlFor="toggle">
            <div className="trace"></div>
            <div className="trace"></div>
            <div className="trace"></div>
        </label>
        <MenuBox>
            <Nav>
                <ul>
                    <li><a href="#aboutme">{getString(sections[0].title, language)}</a></li>
                    <li>
                        <details>
                            <summary>{getString(sections[1].title, language)}</summary>
                            <ul>
                                {projects.map(project => <li><a href={`#${project.assetsName}`}>{project.name[language]}</a></li>)}
                            </ul>
                        </details>
                    </li>
                    <li><a href="#skills">{getString(sections[2].title, language)}</a></li>
                    <li><a href="#reachmeout">{getString(sections[3].title, language)}</a></li>
                </ul>
            </Nav>
            <SettingsDiv>
                <LightModeToggler handleToggleMode={handleSwitchTheme} mode={actualTheme} />
                <LanguageSelect handleChangeLanguage={handleChangeLanguage} />
            </SettingsDiv>
        </MenuBox>
    </ContainerDiv>
  );
}

export default Menu;