"use client"

import '../globals.css';
import React, { Component } from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {
    return (
        <div className='footer'>
            <AiOutlineCopyrightCircle size={12} />
            <div className='footerText'><p>Ting Lin 2023. Art by Cole Lee.</p></div>
        </div>
    )
}