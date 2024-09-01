import React from 'react';
import ProjectBox from './ProjectBox';
import Ego from '../images/EGO-home.png';
import UrduIT from '../images/UrduIT.png';
import ubicraft from '../images/ubicraft.png';
import BrainBox from '../images/BrainBox.png';
import Linkedin from '../images/Linkedin.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Ego} projectName="EGOAPP" />
        <ProjectBox projectPhoto={UrduIT} projectName="UrduITAcadmey" />
        <ProjectBox projectPhoto={ubicraft} projectName="Ubicraft" />
        <ProjectBox projectPhoto={BrainBox} projectName="BrainBox" />
        <ProjectBox projectPhoto={Linkedin} projectName="LinkedinAutomation" />
        

      </div>

    </div>
  )
}

export default Projects