import React from 'react';
import ShapesBackground from '../ShapesBackground/ShapesBackground';
import ProjectsBackground from '../ProjectsBackground/ProjectsBackground';

function Background({ src, theme }) {

  return (
    <>
        {!src ? <ShapesBackground theme={theme}/> : <ProjectsBackground src={src}/>}
    </>
  );
}

export default Background;