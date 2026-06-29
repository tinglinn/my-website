"use client";

import React, { Component } from "react";
import '../globals.css';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiTwotoneMail } from "react-icons/ai";

export default function Intro() {
    return (
        <div className="text">
            <div className="about">
                <p>Ting Lin is a writer & engineer based in Oakland, California.</p>
                <p>Her poems have appeared in The Cincinnati Review, Michigan Quarterly Review, The Margins and more.
                    Her essays and criticism can be found in The Nation & The Baffler.
                    She was part of <a href="https://chaoyangtrap.house/">Chaoyang Trap</a> (2021-2023), an experimental newsletter about the Chinese internet.
                </p>
                <p>She holds a B.A. in linguistics and M.S. in computer science from Stanford University.</p>
                <p>🍤🥟粤产出口品。</p>
            </div>
            <div className="links">
                <a href="mailto: tinglin0708@gmail.com"><AiTwotoneMail size={20} style={{ padding: 2 }} /></a>
                <a href="https://twitter.com/imtootiredfor"><AiFillTwitterSquare size={20} style={{ padding: 2 }} /></a>
                <a href="https://github.com/tinglinn"><AiFillGithub size={20} style={{ padding: 2 }} /></a>
                {/* <a href="https://www.linkedin.com/in/ting-linn/"><AiFillLinkedin size={20} style={{ padding: 2 }} /></a> */}
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
