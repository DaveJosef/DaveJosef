import React from 'react';
import { getPersona } from '../../utils/data/data';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import email from '../../assets/icons/email.png';
import styled, { css } from 'styled-components';
import { useRef } from 'react';
import IconAnchor from '../../components/IconAnchor/IconAnchor';
import Menu from './Menu/Menu';

const ContactList = styled.ul`

    display: flex;

    li {
        display: inline-block;
        margin-left: 3rem;
    }

    @media screen and (max-width: 720px) {

        li {
            margin-left: 0;
            margin: 1.5rem;
        }

    }

`;

const ContainerDiv = styled.div`

    margin-left: 3rem;
    position: fixed;
    visibility: visible;
    width: 61.8%;
    height: 50vh;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: flex-start;
    font-size: 1rem;
    padding-top: 10vw;

    p {
        margin-left: 2rem;
    }
    
    @media screen and (max-width: 720px) {

        justify-content: center;
        align-items: center;
        margin-left: 0;
        text-align: center;

        p {
            margin-left: 0;
        }
        
    }

`;

const HeaderDiv = styled.div`
    background-image: linear-gradient(90deg, rgb(${props => props.theme.background}) 61.8%, transparent);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 720px) {

        flex-direction: column;
        justify-content: center;
        background-color: rgb(${props => props.theme.background});
        background-image: none;

    }
    
    ${props => (props.ratio) && css`
        transform: scale(${Math.max(1 - props.ratio, 0.5)});
        opacity: ${1 - props.ratio};
        filter: blur(${1 - props.ratio}px);
        border-radius: 1rem;
    `}

`;

const ProfileImg = styled.img`

    width: 200px;
    border-radius: 50%;
    margin: 1rem;

`;

export default function Header({ language, scrollTop, handleSwitchTheme, handleChangeLanguage, actualTheme }) {

    const persona = getPersona(language);
    const divRef = useRef(null);

    const calculateRatio = () => {
        let element = divRef.current;
        if (element) {
            let boundings = element.getBoundingClientRect();
            let newRatio = scrollTop / boundings.height;
            return Math.min(newRatio, 1);
        }
    };
    
  return (

    <HeaderDiv className='header' ref={divRef} ratio={calculateRatio()}>
        <Menu handleChangeLanguage={handleChangeLanguage} handleSwitchTheme={handleSwitchTheme} actualTheme={actualTheme} language={language}></Menu>
        <ContainerDiv>
            <div>
                <ProfileImg src='https://media-exp1.licdn.com/dms/image/C4E03AQF3r7PO-L4nKw/profile-displayphoto-shrink_800_800/0/1654561568665?e=1674086400&v=beta&t=riY8SrD3zJ51yn4P1mvWdg8hKwRpKdxQR9-ScLMOrpA' alt="Profile"/>
            </div>
            <p>{persona.presentation}</p>
            <p>{persona.objective}</p>
            <p>{persona.currentlyDoing}</p>
            <nav>
                <ContactList>
                    <li>
                        <IconAnchor href="https://github.com/DaveJosef" src={github} alt="Github"></IconAnchor>
                    </li>
                    <li>
                        <IconAnchor href="https://linkedin.com/in/josé-david-de-oliveira-sousa-99bba4125/" src={linkedin} alt="Linkedin"></IconAnchor>
                    </li>
                    <li>
                        <IconAnchor href="mailto:josedaaaaavid@gmail.com" src={email} alt="E-mail"></IconAnchor>
                    </li>
                </ContactList>
            </nav>
        </ContainerDiv>
    </HeaderDiv>

  );
};
