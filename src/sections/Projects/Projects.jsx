import React, { Fragment } from 'react';
import {getProject, getSection, MultiLanguageString, projects } from '../../utils/data/data';
import Project from '../../components/Project/Project';
import { Pane } from '../../components/Pane/Pane';
import { Title } from '../../components/Title/Title';
import ReadMoreButton from '../../components/ReadMoreButton/ReadMoreButton';
import { useState } from 'react';
import Section from '../../components/Section/Section';
import styled from 'styled-components';
import { useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

const ProjectsList = styled.ul`

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    
`;

function Projects({ language, scrollTop, handleChangeBackground, isOpaque }) {

    const [filteredProjects, setFilteredProjects] = useState(projects.slice(0, 2));
    const [scope, animate] = useAnimate();
    const inView = useInView(scope);

    useEffect(() => {
        if (inView) {
            animate(scope.current, { opacity: 1, transform: 'none' });
        } else {
            animate(scope.current, { opacity: 0, transform: 'translateX(-200px)' });
            handleChangeBackground("");
        }
    }, [inView]);

    const titles = new MultiLanguageString(
        "Meus Projetos", "My Projects"
    );
    const section = getSection(language, titles);

    const handleReadMore = () => {
        setFilteredProjects(projects);
    }

  return (

    <>
        <Section className="projects" id='projects'>
            <Pane ref={scope} className={"".concat(isOpaque ? "" : "transparent")}>
                <Title>{section.title}</Title>
                {section.introduction}
                <ProjectsList>
                    {
                        filteredProjects.map(
                            (el, index) => 
                            <Fragment key={index}>
                                <Project scrollTop={scrollTop} handleChangeBackground={handleChangeBackground} project={getProject(language, el)} index={index} />
                            </Fragment>
                        )
                    }
                    <ReadMoreButton language={language} handleReadMore={handleReadMore} />
                </ProjectsList>
                {section.conclusion}
            </Pane>
        </Section>
    </>
    
  );
}

export default Projects;