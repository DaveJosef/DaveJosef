import React, { useEffect, useState } from 'react';
import WrapArticle from '../../components/WrapArticle/WrapArticle';
import { ReactComponent as GithubIcon } from '../../assets/icons/svg/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/svg/linkedin.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/svg/play.svg';
import { ReactComponent as DownloadIcon } from '../../assets/icons/svg/download.svg';
import Expand from '../../components/Expand/Expand';
import { getVideo } from '../../utils/videos/videos';
import { getTag } from '../../utils/data/data';
import { useRef } from 'react';
import { getThumbs } from '../../utils/thumbnails/thumbnails';
import styled from 'styled-components';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import IconAnchor from '../IconAnchor/IconAnchor';

const ListItem = styled.li`
    list-style: none;
`;

function Project({ project, index, handleChangeBackground, scrollTop }) {

    const projectRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const { scrollYProgress } = useScroll({ target: projectRef, offset: ["end end", "start start"] });
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsInView(latest > 0 && latest < 1);
    })

    const detectBackgroundUpdate = () => {
        if (isInView) {
            let image = getThumbs(project) ? getThumbs(project).thumb : "";
            handleChangeBackground(image);
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
                                <IconAnchor className="" href={project.githubLink} target="_blank" rel='noreferrer'>
                                    <GithubIcon />
                                </IconAnchor>
                            </li>
                        }
                        {!project.linkedinLink ? <></> : 
                            <li>
                                <IconAnchor className="" href={project.linkedinLink} target="_blank" rel='noreferrer'>
                                    <LinkedinIcon />
                                </IconAnchor>
                            </li>
                        }
                        {!project.previewLink ? <></> : 
                            <li>
                                <IconAnchor className="" href={project.previewLink} target="_blank" rel='noreferrer'>
                                    <PlayIcon />
                                </IconAnchor>
                            </li>
                        }
                        {!project.downloadLink ? <></> : 
                            <li>
                                <IconAnchor className="" href={project.downloadLink} download target="_blank" rel='noreferrer'>
                                    <DownloadIcon />
                                </IconAnchor>
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