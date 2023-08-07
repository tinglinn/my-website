"use client";

import React, { Component } from "react";
import '../globals.css';
import ProjectCard from '../components/projectCard';
    
// name, type, image, description, link, github
{/* <ProjectCard
    name={''}
    type={''}
    image={''}
    description={''}
    link={''}ç
    github={''}
    date={''} /> */}
    
export default function Projects() {
    return (
        <div className="projects">
            <ProjectCard
                name={'Storytracker'}
                type={'Web'}
                image={'/images/storytracker.png'}
                description={'Comparing news coverage with home pages and AI'}
                link={'https://storytracker.vercel.app/'}
                github={'https://github.com/acui51/homepage-compare'}
                date={'Winter 2023'} />
            <ProjectCard
                name={'Whisper'}
                type={'Mobile'}
                image={'/images/whisper.png'}
                description={'ADHD-friendly time management'}
                link={'https://hci.stanford.edu/courses/cs147/2022/au/projects/AccessibleDesignEmily/whisper/'}
                github={'https://github.com/tinglinn/whisper'}
                date={'Fall 2022'}/>
            <ProjectCard
                name={'ViDescribe'}
                type={'Mobile'}
                image={'/images/videscribe.jpg'}
                description={'Crowdfunding descriptions of art for visually-impaired'}
                link={'https://devpost.com/software/vi-describe'}
                github={'https://github.com/tinglinn/vi-describe'}
                date={'Winter 2023'} />
            <ProjectCard
                name={'__ Generation'}
                type={'Zine'}
                image={'/images/videscribe.jpg'}
                description={'On '}
                link={'https://devpost.com/software/vi-describe'}
                github={'https://github.com/tinglinn/vi-describe'}
                date={'Winter 2023'} />
        </div>
    )
}