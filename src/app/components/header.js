"use client"

import '../globals.css';
import React, { Component } from "react";
import Link from 'next/link';
import Image from 'next/image';

function Menu() {
    return (
        <div className="menu">
            <Link href="/">about • </Link>
            <Link href="/writing">writing • </Link>
            <a href="https://tinglin.itch.io/">games</a>
            {/* <a href="https://drive.google.com/file/d/1-x4K4Bcg7b-MLfNu2s6uMt1YdbGH4aUg/view?usp=sharing">resume</a> */}
        </div>
    )
}

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="header">
                <h1>hi, i&apos;m ting 聽 ✧*･ﾟ:*</h1>
                <div className="imageContainer"><Image src='/images/result.png' alt='pixel art of me as eevee' width={100} height={100} /></div>
            </div>
            <Menu />
        </div>
    )
}