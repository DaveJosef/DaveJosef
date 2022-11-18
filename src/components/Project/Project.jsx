import React, { useEffect } from 'react';
import WrapArticle from '../../components/WrapArticle/WrapArticle';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import preview from '../../assets/icons/play.png';
import download from '../../assets/icons/download.png';
import Expand from '../../components/Expand/Expand';
import { getVideo } from '../../utils/videos/videos';
import { getTag } from '../../utils/data/data';
import { useRef } from 'react';
import { getThumbs } from '../../utils/thumbnails/thumbnails';
import styled from 'styled-components';
import { Icon } from '../Icon/Icon';

const ListItem = styled.li`
    list-style: none;
`;

function Project({ project, index, handleChangeBackground, scrollTop }) {
    const projectRef = useRef(null);

    const isOutsideBottom = (element) => {
        const boundingRect = element.getBoundingClientRect();

        return boundingRect.bottom > window.innerHeight;
    }

    const isOutsideTop = (element) => {
        const boundingRect = element.getBoundingClientRect();

        return boundingRect.top < 0;
    }

    const isVisible = (element) => {
        const boundingRect = element.getBoundingClientRect();

        return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight;
    }

    const detectBackgroundUpdate = () => {
        let element = projectRef.current;
        let image = undefined;
        if (isVisible(element)) {
            image = getThumbs(project) ? getThumbs(project).thumb : "";
            handleChangeBackground(image);
        } else if ((element.nextSibling && !element.nextSibling.nextSibling && isOutsideTop(element))
         || (index === 0 && isOutsideBottom(element))) {
            handleChangeBackground("");
        }
    }

    const tagsMap = (tag, index) => <li key={index + "-" + tag}>
        {`#${getTag(tag).name},`}
    </li>;

    useEffect(() => {
        detectBackgroundUpdate();
    });

  return (
    <ListItem ref={projectRef} className="project" id={project.assetsName} key={index + "-" + project.assetsName}>
        <WrapArticle headerContent={
            <>
                <div className='video'>
                    <video controls>
                        <source src={getVideo(project) === undefined ? '' : getVideo(project).video} type="video/mp4"/>
                    </video>
                </div>
                <nav>
                    <ul>
                        {!project.githubLink ? <></> : 
                            <li>
                                <a className="" href={project.githubLink} target="_blank" rel='noreferrer'><Icon src={github} alt="Github"/></a>
                            </li>
                        }
                        {!project.linkedinLink ? <></> : 
                            <li>
                                <a className="" href={project.linkedinLink} target="_blank" rel='noreferrer'><Icon src={linkedin} alt="Linkedin"/></a>
                            </li>
                        }
                        {!project.previewLink ? <></> : 
                            <li>
                                <a className="" href={project.previewLink} target="_blank" rel='noreferrer'><Icon src={preview} alt="Preview"/></a>
                            </li>
                        }
                        {!project.downloadLink ? <></> : 
                            <li>
                                <a className="" href={project.downloadLink} download target="_blank" rel='noreferrer'><Icon src={download} alt="Download"/></a>
                            </li>
                        }
                    </ul>
                </nav>
            </>
        }>
            <Expand title={project.name} subtitle={project.catchLine}>
                {project.description}
            </Expand>
            <ul>
                {project.tags.map(tagsMap)}
            </ul>
        </WrapArticle>
    </ListItem>
  );
}

export default Project;