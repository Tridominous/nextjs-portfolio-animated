"use client";

import React, {useState, useTransition} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>HTML, CSS & JavaScript</li>
            </ul>
        )
    },

    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Harvard CS50x</li>
                <li>Codecademy Full stack Developer Course</li>
                <li>Zero To Mastery Complete Web Development Course</li>
                <li>Freecodecamp Developer path</li>
            </ul>
        )
    },

    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Harvard CS50X Certificate</li>
                <li>Codecademy Computer Science certificate</li>
                <li>Codecademy Full Stack certificate</li>
                <li>ZTM Complete Web Development Certificate</li>
                <li>Freecode camp certficate</li>
                
            </ul>
        )
    }
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
        })
    }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
            src="/images/about-image.png" 
            alt='about image'
            width={500} 
            height={500} 
            />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a full stack web developer, I bring a passion for creating interactive and responsive web applications. 
          My expertise includes working with a diverse set of technologies, such as JavaScript, React, Redux, 
          Node.js, Express, PostgreSQL, TypeScript, Python, HTML, CSS, and Git. I am a quick learner, 
          always eager to expand my knowledge and skill set. Furthermore, I thrive in collaborative 
          environments and am excited to work with others to create amazing applications. 
          If you need further assistance or have any questions, feel free to ask!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;