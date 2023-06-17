import React, { useEffect } from 'react';
import Expand from '../../components/Expand/Expand';
import WrapArticle from '../../components/WrapArticle/WrapArticle';
import { getPersona, getSection, getString, MultiLanguageString } from '../../utils/data/data';
import { ReactComponent as MailIcon } from '../../assets/icons/svg/envelope.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/svg/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/svg/linkedin.svg';
import { Pane } from '../../components/Pane/Pane';
import { Title } from '../../components/Title/Title';
import IconAnchor from '../../components/IconAnchor/IconAnchor';
import Table from '../../components/Table/Table';
import Section from '../../components/Section/Section';
import { useAnimate, useInView, useReducedMotion } from 'framer-motion';

function AboutMe({ language }) {

    const persona = getPersona(language);

    const titles = new MultiLanguageString(
        "Sobre Mim", "About Me",
    );
    const section = getSection(language, titles);

    const topics = [
        {
            title: new MultiLanguageString("Quem sou eu?", "Who am I?"),
            subtitle: new MultiLanguageString(
                "Quem serei em seu time",
                "Who I will be in your team"
            ),
        },
        {
            title: new MultiLanguageString(
                "Cursos",
                "Background"
            ),
            subtitle: new MultiLanguageString(
                "Veja o que andei estudando",
                "See what I have learned"
            ),
        },
        {
            title: new MultiLanguageString("Idiomas", "Languages"),
            subtitle: new MultiLanguageString(
                "Mais idiomas equivale a mais oportunidades",
                "More languages equals more opportunities"
            ),
        },
    ];

    const getTopic = (index) => {
        const {
            title,
            subtitle,
        } = topics[index];

        return {
            title: getString(title, language),
            subtitle: getString(subtitle, language),
        };
    }

    const getColumns = () => language === 'portuguese' ? [
        "Idioma",
        "Leitura",
        "Escrita",
        "Fala",
        "Escuta",
    ] : [
        "Language",
        "Reading",
        "Writing",
        "Speaking",
        "Listening",
    ];

    const getCertificateTitle = () => language === 'portuguese' ? "Link para o Certificado" : "Certificate Link";

    const getFormationDate = (f) => {
        return `${f.startAt.getFullYear()} - ${f.finishAt.getFullYear()}`;
    }

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        if (isInView) {
            animate(scope.current, { opacity: 1, transform: 'none' });
        } else {
            animate(scope.current, { opacity: 0, transform: 'translateX(-200px)' });
        }
    }, [isInView]);

  return (
    <Section id="aboutme">
        <Pane ref={scope} reducedMotion={reducedMotion}>
            <Title>{section.title}</Title>
            {section.introduction}
            <WrapArticle headerContent={
                <>
                    <div className='profile'>
                        <img src='https://res.cloudinary.com/dloygzh7o/image/upload/v1685816945/perfil-cortado-removebg_m4vdks.png' alt="Profile"/>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <IconAnchor className="" href={persona.githubLink} target="_blank" rel='noreferrer' alt="Github">
                                    <GithubIcon />
                                </IconAnchor>
                            </li>
                            <li>
                                <IconAnchor className="" href={persona.linkedinLink} target="_blank" rel='noreferrer' alt="Linkedin">
                                    <LinkedinIcon />
                                </IconAnchor>
                            </li>
                            <li>
                                <IconAnchor className="" href={"mailto:" + persona.email} target="_blank" rel='noreferrer' alt="E-mail">
                                    <MailIcon />
                                </IconAnchor>
                            </li>
                        </ul>
                    </nav>
                </>
            }>
                <Expand open={true} title={getTopic(0).title} subtitle={getTopic(0).subtitle}>
                    <p>
                        {persona.description}
                    </p>
                </Expand>
                <Expand title={getTopic(1).title} subtitle={getTopic(1).subtitle}>
                    <ol>
                        {persona.background.map(
                            (f, index) => <li key={index} style={{display: "flex"}}>
                                <div>
                                    <h4>{getString(f.name, language) + " - " + getFormationDate(f)}</h4>
                                    <p style={{marginLeft: "1rem"}}>{f.location}
                                        {f.certificateLink ? 
                                        <span style={{marginLeft: "1rem"}}>
                                            <a href={f.certificateLink} title='Certificate'>{getCertificateTitle()}</a>
                                        </span> :
                                        <></>
                                        }
                                    </p>
                                </div>
                            </li>
                        )}
                    </ol>
                </Expand>
                <Expand title={getTopic(2).title} subtitle={getTopic(2).subtitle}>
                    <Table columns={getColumns()} rows={persona.languages}/>
                </Expand>
            </WrapArticle>
            {section.conclusion}
        </Pane>
    </Section>
  );
}

export default AboutMe;