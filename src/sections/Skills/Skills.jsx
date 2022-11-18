import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/Icon/Icon';
import { Pane } from '../../components/Pane/Pane';
import Section from '../../components/Section/Section';
import { Title } from '../../components/Title/Title';
import { getSection, MultiLanguageString, tags, tags_projects } from '../../utils/data/data';
import { getImages } from '../../utils/images/images';

const SkillList = styled.ul`
        
    & {
        width: 80vw;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        font-size: 2rem;
        padding: 0 0 10vw 0;
        list-style: none;
    }

    & li {
        background-color: inherit;
        margin: 5vw 0;
    }

    & > div > li:last-child {
        margin-bottom: 0;
    }

    & div.skill {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

    & > div:first-child div.skill {
        flex-direction: row-reverse;
    }
    
    & div.skill > img {
        width: 5rem;
        margin: 1rem;
    }

    @media screen and (max-width: 720px) {

        & > div:first-child div.skill {
            flex-direction: row;
        }
        
        & {
            width: 60vw;
            height: auto;
            flex-direction: column;
            flex-wrap: nowrap;
        }

        & div.skill > img {
            width: 12.5vw;
            margin: inherit;
        }

        @media screen and (max-width: 320px) {

            & li {
                margin: 1rem 0;
            }

        }

    }

`;

const Progress = styled.progress`

    &::-webkit-progress-value {
        background: rgb(${props => props.theme.colorA});
    }

    &::-webkit-progress-bar {
        background-color: rgb(${props => props.theme.colorB});
    }

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    border-radius: 1rem;
    overflow: hidden;
    background-color: rgb(${props => props.theme.colorA});
    height: 1rem;

    @media screen and (max-width: 720px) {

        width: 61.8%;
        height: 2vw;
        
    }

`;

function Skills({ language }) {

    const titles = new MultiLanguageString(
        "Habilidades", "Skills"
    );
    const section = getSection(language, titles);

    const splitSkills = (skills) => [skills.slice(0, skills.length / 2 + 1), skills.slice(skills.length / 2 + 1)]

    const getURL = (el) => {
        return !el.softSkill ? `https://www.vectorlogo.zone/logos/${el.assetsName}/${el.assetsName}-icon.svg` : getImages(el).image;
    }

    const getAmountPracticed = (id) => tags_projects.map(t_p => t_p.tag).filter(t => t === id).length;

    const getTimesMostPracticed = () => 2;

    const mapSkill = (el, index) => 
        <li>
            <div className="skill" key={index + "-" + el.name}>
                {
                    el.softSkill ? <Icon src={getURL(el)} alt={el.name}/> : 
                    <img src={getURL(el)} alt={el.name}/>
                }
                <Progress value={getAmountPracticed(el.id)} max={getTimesMostPracticed()}>
                    <div className="progress-bar"></div>
                </Progress>
            </div>
        </li>

  return (
    <Section className="skills" id='skills'>
        <Pane>
            <Title>{section.title}</Title>
            {section.introduction}
            <SkillList>
                <div>
                    {splitSkills(tags)[0].map(mapSkill)}
                </div>
                <div>
                    {splitSkills(tags)[1].map(mapSkill)}
                </div>
            </SkillList>
            {section.conclusion}
        </Pane>
    </Section>
  );
}

export default Skills;