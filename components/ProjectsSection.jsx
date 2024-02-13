"use client";

import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion, useInView} from "framer-motion"

const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "NextJs portfolio website",
      image: "/images/projects/profilepreview.png",
      tag: ["All", "Web", "Mobile"],
      gitUrl: "/",
      previewUrl: "https://nextjs-portfolio-animated-jcki.vercel.app/",
    },
    {
      id: 2,
      title: "T-Shirt Design",
      description: "T-Shirt design website with photo upload and AI",
      image: "/images/projects/tshirtdesign.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://64fde048ecfe833391586c1b--shirtdesignai.netlify.app/",
    },
    {
      id: 3,
      title: "Tindog project",
      description: "A static tinder page for dogs",
      image: "/images/projects/tindogimage.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://nextjs-portfolio-animated.vercel.app/",
    },
    {
      id: 4,
      title: "Dashboard prototype",
      description: "Dashboard application for CRM [test login: user@nextmail.com, 123456]",
      image: "/images/projects/acme.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "https://nextjs-dashboard-theta-bice.vercel.app/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/projects/6.png",
      tag: ["All", "Web", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  const handleTagChange = (newTag) => {
      setTag(newTag)
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  return (
    <section id='projects'>
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-10'>
        My Projects
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
      <ProjectTag 
        onClick={handleTagChange}
        name="All"
        isSelected={tag === "All"}
      />

      <ProjectTag 
        onClick={handleTagChange}
        name="Web"
        isSelected={tag === "Web"}
      />

      <ProjectTag 
        onClick={handleTagChange}
        name="Mobile"
        isSelected={tag === "Mobile"}
      />
      
    </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {
        filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3, delay: index * 0.4}}
          >
         <ProjectCard 
         key={project.id} 
         title={project.title} 
         description={project.description} 
         imgUrl={project.image}
         gitUrl={project.gitUrl}
         previewUrl={project.previewUrl}
         />
         </motion.li>
         ))}
    </ul>
    </section>
  )
}

export default ProjectsSection;