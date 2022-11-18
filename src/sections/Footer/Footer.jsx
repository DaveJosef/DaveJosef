import React from 'react';
import download from '../../assets/icons/download.png';
import email from '../../assets/icons/email.png';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import play from '../../assets/icons/play.png';
import communication from '../../assets/icons/skills/communication.png';
import team from '../../assets/icons/skills/team.png';
import top from '../../assets/icons/top.png';
import lightMode from '../../assets/icons/light_mode.png';
import nightMode from '../../assets/icons/night_mode.png';
import styled from 'styled-components';
import { colors } from '../../utils/theme/theme';
import { getPersona } from '../../utils/data/data';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-color: rgb(${colors.DARKER});
    color: rgb(${colors.LIGHT3});

    h3 {
        font-size: 2rem;
    }

    p, h3 {
        padding: 1rem;
    }
    
    a {
        display: inline-block;
    }
`;

const FooterDiv = styled.div`
    width: 80vw;
    align-items: center;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 2px rgb(${colors.LIGHT}) solid;
    padding: 1rem;

    &:last-of-type {
        border-bottom: none;
    }

    img {
        filter: invert();
        width: 1rem;
        margin: .25rem;
    }

    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`;

const RowBlock = styled.div`
    width: 100%;
    
    &:not(:first-of-type) {
        border-left: 2px rgb(${colors.LIGHT}) solid;
    }

    @media screen and (max-width: 720px) {
        &:not(:first-of-type) {
            border-left: none;
        }

    }
`;

function Footer({ language }) {
    const persona = getPersona(language);

    return (
        <Container className="footer">
            <FooterDiv>
                <Row>
                    <RowBlock>
                        <p>{language !== "portuguese" ? "Made by José David" : "Feito por José David"}</p>
                        <p>{language !== "portuguese" ? "2022 © All rights reserved" : "2022 © Todos os direiros reservados"}</p>
                    </RowBlock>
                    <RowBlock>
                        <h3>{language !== "portuguese" ? "Contact" : "Contato"}</h3>
                        <nav>
                            <ul style={{display: "flex"}}>
                                <li style={{display: "flex",marginLeft: "1rem"}}><a href={persona.githubLink}>Github</a></li>
                                <li style={{display: "flex",marginLeft: "1rem"}}><a href={persona.linkedinLink}>Linkedin</a></li>
                                <li style={{display: "flex",marginLeft: "1rem"}}><a href={`mailto:${persona.email}`}>E-mail</a></li>
                            </ul>
                        </nav>
                    </RowBlock>
                </Row>
                <Row>
                    <RowBlock>
                        <h3>{language !== "portuguese" ? "Icons credits" : "Créditos dos Ícones"}</h3>
                        <p>
                        {language !== "portuguese" ? "Icons by " : "Ícones por "}
                            <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons"><img src={linkedin} alt="Linkedin"/> Linkedin - Freepik</a>, 
                            <a href="https://www.flaticon.com/free-icons/github" title="github icons"><img src={github} alt="Github"/> Github - Pixel perfect</a>, 
                            <a href="https://www.flaticon.com/free-icons/email" title="email icons"><img src={email} alt="Email"/> Email - iconixar</a>, 
                            <a href="https://www.flaticon.com/free-icons/play-button" title="play button icons"><img src={play} alt="Play"/> Play button - Freepik</a>, 
                            <a href="https://www.flaticon.com/free-icons/download" title="download icons"><img src={download} alt="Download"/> Download - kosonicon</a>, 
                            <a href="https://www.flaticon.com/free-icons/dialogue" title="dialogue icons"><img src={communication} alt="Download"/> Dialogue - Ilham Fitrotul Hayat</a>, 
                            <a href="https://www.flaticon.com/free-icons/team" title="team icons"><img src={team} alt="Download"/> Team - IconsBox</a>, 
                            <a href="https://www.flaticon.com/free-icons/up-arrow" title="up arrow icons"><img src={top} alt="Top" /> Up arrow - Ilham Fitrotul Hayat</a>, 
                            <a href="https://www.flaticon.com/free-icons/light-dark" title="light-dark icons"><img src={lightMode} alt="light mode" />Light-dark - zafdesign</a>, 
                            <a href="https://www.flaticon.com/free-icons/dark" title="dark icons"><img src={nightMode} alt="dark mode" />Dark - Komar Dews</a>, 
                            <a href="https://www.flaticon.com/br/icones-gratis/livro" title="livro ícones">Livro - Freepik</a>{language !== "portuguese" ? " on Flaticon" : " no Flaticon"}
                        </p>
                    </RowBlock>
                    <RowBlock>
                        <h3>{language !== "portuguese" ? "Skills Icons credits" : "Créditos dos Ícones das Habilidades"}</h3>
                        <p><a href="https://www.vectorlogo.zone/">{language !== "portuguese" ? "Skill Icons from Vector Logo Zone." : "Ícones das habilidades tirados de Vector Logo Zone."}</a></p>
                    </RowBlock>
                </Row>
                <Row>
                    <RowBlock>
                        <p>{language !== "portuguese" ? "Thanks 💓 for seeing till here" : "Obrigado 💓 por ver até aqui"}</p>
                    </RowBlock>
                </Row>
            </FooterDiv>
        </Container>
    );
}

export default Footer;