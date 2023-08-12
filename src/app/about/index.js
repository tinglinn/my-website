"use client";

import React, { Component } from "react";
import '../globals.css';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiTwotoneMail } from "react-icons/ai";

export default function Intro() {
    return (
        <div className="text">
            <div className="about">
                <p>I&apos;m an engineer & writer. Currently, I study computer science & linguistics at Stanford.</p>
                <p>In the past, I&apos;ve done research in the <a href="https://nlp.stanford.edu/">Stanford NLP Group</a> and the <a href="https://web.stanford.edu/group/phonlab/cgi-bin/wordpress/">Stanford Phonetics Lab</a>.
                    I was part of <a href="https://chaoyangtrap.house/">Chaoyang Trap</a> (2021-2023), an experimental newsletter about the Chinese internet.
                    I&apos;ve done backend development & built websites.
                </p>
                <p>In my free time, I make zines, freelance (most recently in <a href="https://thebaffler.com/latest/queer-memories-in-beijing-lin-wang">The Baffler</a> & <a href="http://www.heichimagazine.org/en/articles/995/escaping-real-time-on-cantopop-nostalgia">Heichi</a>), and occasionally publish poems.
                   I&apos;m broadly interested in spoken language processing, sociophonetics, and media technology.
                </p>
                <p>🍤🥟粤产出口品。</p>
            </div>
            <div className="links">
                <a href="mailto: tinglin0708@gmail.com"><AiTwotoneMail size={20} style={{ padding: 2 }} /></a>
                <a href="https://twitter.com/imtootiredfor"><AiFillTwitterSquare size={20} style={{ padding: 2 }} /></a>
                <a href="https://github.com/tinglinn"><AiFillGithub size={20} style={{ padding: 2 }} /></a>
                <a href="https://www.linkedin.com/in/ting-lin-183b2a205/"><AiFillLinkedin size={20} style={{ padding: 2 }} /></a>
            </div>
        </div>
    );
}


// function AboutMe() {
//     return (
//         <div className="about-me">
//             <div className="">
//                 <h3>Currently:</h3>
//                 <ul>
//                     <li>studying CS + Linguistics at Stanford; </li>
//                     <li>developing for Marcast, a podcast company</li>
//                     <li>working as a software engineer intern at Robinhood</li>
//                 </ul>
//             </div>
//             <div className="">
//                 <h3>Previously:</h3>
//                 <ul>
//                     <li>researched multilingual speech neural models at Stanford NLP Group</li>
//                     <li>wrote about art, politics, tech for the Baffler, Heichi, RADII, and more</li>
//                     <li>part of Chaoyang Trap, an experimental newsletter about the Chinese internet</li>
//                 </ul>
//             </div>
//             <div className="">
//                 <h3>Interested in:</h3>
//                 <ul>
//                     <li>NLP for sinitic languages, especially Cantonese</li>
//                     <li>collage and zine-making!</li>
//                     <li>media technology and computational journalism</li>
//                 </ul>
//             </div>
//         </div>
//     );
// }
