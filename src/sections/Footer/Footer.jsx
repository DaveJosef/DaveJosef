import React from 'react';
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
                                <li style={{display: "flex",marginLeft: "1rem"}}><a href={`mailto:${persona.email}?subject=Contato%20referente%20a%20vagas%20de%20desenvolvedor&body=Ol%C3%A1%2C%20Jos%C3%A9%20David.%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20para%20falarmos%20mais%20sobre%20neg%C3%B3cios.`}>E-mail</a></li>
                            </ul>
                        </nav>
                    </RowBlock>
                </Row>
                <Row>
                    <RowBlock>
                        <h3>{language !== "portuguese" ? "Credits" : "Créditos"}</h3>
                        <p>
                        {language !== "portuguese" ? "Icons by Flaticon and Vector Logo Zone" : "Ícones por Flaticon e Vector Logo Zone"}
                        </p>
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