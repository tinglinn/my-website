"use client"

import '../globals.css';
import React, { Component } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { AiFillGithub } from "react-icons/ai";

export default function Card({name, type, image, description, link, github, date}) {
    return (
        <div className='projectCard'>
            <a href={link}>
                <div className="projectImage">
                    <Image src={image} alt="image of project front page" fill  />
                </div>
            </a>
            <div className="projectTitle">
                <h3>{name}</h3>
                <a href={github}> <AiFillGithub size={18} style={{marginLeft: 4, marginTop: 1}} /></a>
            </div>
            <div>
                <p>{type} / {date} </p>
                <p>{description}</p>
            </div>
        </div>
    )
}