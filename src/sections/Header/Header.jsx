import React from 'react';
import { getPersona } from '../../utils/data/data';
import styled from 'styled-components';
import { useRef } from 'react';
import IconAnchor from '../../components/IconAnchor/IconAnchor';
import Menu from './Menu/Menu';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactComponent as MailIcon } from '../../assets/icons/svg/envelope.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/svg/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/svg/linkedin.svg';

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

    @media screen and (max-height: 600px) {
        flex-flow: row;
        width: auto;
        margin-left: 1.25rem;
        padding-top: 7vw;
        padding-left: 2rem;
        padding-right: 2rem;
    }
    
    @media screen and (max-width: 720px) {

        justify-content: center;
        align-items: center;
        margin-left: 0;
        text-align: center;

        p {
            margin-left: 0;
        }
            
        nav {
            display: flex;
            justify-content: center;
        }

    }

`;

const HeaderDiv = styled(motion.div)`
    background-image: linear-gradient(90deg, rgb(${props => props.theme.background}) 61.8%, transparent);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    position: fixed;
    overflow: hidden;
    
    @media screen and (max-height: 600px) {
        background-color: rgb(${props => props.theme.background});
        background-image: none;
    }
    
    @media screen and (max-width: 720px) {

        flex-direction: column;
        justify-content: center;
        background-color: rgb(${props => props.theme.background});
        background-image: none;

    }

`;

const ProfileImg = styled.img`

    width: 200px;
    border-radius: 50%;
    margin: 1rem;

    @media screen and (max-height: 600px) {
        width: 20vh;
    }

`;

const Wrapper = styled.div`
    height: 200vh;
    position: relative;
`;

export default function Header({ language, handleSwitchTheme, handleChangeLanguage, actualTheme }) {

    const persona = getPersona(language);
    const divRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: divRef,
        offset: ["end end", "start start"]
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacity = useTransform(scrollYProgress, val => val);
    const borderRadius = useTransform(scrollYProgress, val => val ? '1rem' : '0px');
    const blur = useTransform(scrollYProgress, val => `blur(${1 - val}px)`);
    const display = useTransform(scrollYProgress, val => val === 0 ? 'none' : 'flex');

  return (

    <Wrapper ref={divRef}>
        <HeaderDiv className='header' style={{ scale, opacity, borderRadius, filter: blur, display }}>
            <Menu handleChangeLanguage={handleChangeLanguage} handleSwitchTheme={handleSwitchTheme} actualTheme={actualTheme} language={language}></Menu>
            <ContainerDiv>
                <div>
                    <ProfileImg src='https://res.cloudinary.com/dloygzh7o/image/upload/v1685816945/perfil-cortado-removebg_m4vdks.png' alt="Profile"/>
                </div>
                <div>
                    <p>{persona.presentation}</p>
                    <p>{persona.objective}</p>
                </div>
                <div>
                    <p>{persona.currentlyDoing}</p>
                    <nav>
                        <ContactList>
                            <li>
                                <IconAnchor href={persona.githubLink} alt="Github">
                                    <GithubIcon />
                                </IconAnchor>
                            </li>
                            <li>
                                <IconAnchor href={persona.linkedinLink} alt="Linkedin">
                                    <LinkedinIcon/>
                                </IconAnchor>
                            </li>
                            <li>
                                <IconAnchor href={`mailto:${persona.email}?subject=Contato%20referente%20a%20vagas%20de%20desenvolvedor&body=Ol%C3%A1%2C%20Jos%C3%A9%20David.%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20para%20falarmos%20mais%20sobre%20neg%C3%B3cios.`} alt="E-mail">
                                    <MailIcon/>
                                </IconAnchor>
                            </li>
                        </ContactList>
                    </nav>
                </div>
            </ContainerDiv>
        </HeaderDiv>
    </Wrapper>

  );
};
