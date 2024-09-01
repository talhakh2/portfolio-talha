import React from 'react';
import { FaVideo } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    LinkedinAutomationDesc: "Developed a MERN-based web application that automates LinkedIn tasks, including sending connection requests, automated messages, and comments on posts scraped from a URL. This was achieved by integrating a third-party service provider to enable these features.",
    LinkedinAutomationVideo: "https://drive.google.com/file/d/11eFC8zc_ATuqGx4Q6hLxBJgM4u1UCBjB/view?usp=sharing",
    LinkedinAutomationWebsite: "",

    BrainBoxDesc: " Developed a website using React and Flask, integrated OpenAI API for generating study material, quiz, summary and transcript based on user-uploaded video. Utilized Azure Cosmos database for data storage.",
    BrainBoxVideo: "https://drive.google.com/file/d/1Mgny4yzr0MB3bG2N7f-6OzWghB9JkW2J/view?usp=sharing",
    BrainBoxWebsite: "",

    UbicraftDesc: "Built a MERN stack Learning Management System with a Python IDE for code execution and automated student progress tracking. Developed teacher management for student monitoring, curriculum, and attendance.",
    UbicraftVideo: "",
    UbicraftWebsite: "https://www.ubicraft.org",

    UrduITAcadmeyDesc: "Developed the Urdu IT Academy website using React, PHP, and MySQL. The site features multiple pages, including About, Help, Quiz, and Courses, where users can explore and watch a variety of listed courses.",
    UrduITAcadmeyVideo: "https://drive.google.com/file/d/1k8wJYRR5Wzb8u4M86iU3GYAcfqT7w2lw/view?usp=sharing",
    UrduITAcadmeyWebsite: "https://www.urduitacademy.com/",

    EGOAPPDesc: "This MERN stack application enhances restaurant visibility and customer engagement by integrating online tools for social media management and SEO optimization. Designed for streamlined online presence management, it empowers restaurants to boost their reputation and success.",
    EGOAPPVideo: "https://drive.google.com/file/d/1d-e4vSYnXo_dn4WDs711_oaf0ls7AgIB/view?usp=sharing",
    EGOAPPWebsite: "https://egoapp.fr/",
  }

  let show = '';
  if (desc[projectName + 'Website'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a href={desc[projectName + 'Video']} target='_blank' rel="noreferrer">
          <button className='projectbtn'><FaVideo /> Video</button>
        </a>

        <a style={{ display: show }} href={desc[projectName + 'Website']} target='_blank' rel="noreferrer">
          <button className='projectbtn'><CgFileDocument /> Live</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectBox