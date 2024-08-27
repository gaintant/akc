"use client";
import React, { useState } from 'react';
const ImageMapComponent = () => {
    const [opaque, setOpaque] = useState(0) 
    const [opaque1, setOpaque1] = useState(0) 
    const [opaque2, setOpaque2] = useState(0) 
    const [opaque3, setOpaque3] = useState(0) 
    return (
        <div >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 722 378">
                
                <image width="722" height="378" href="images/about-akc/team.png"></image>
                <a href="https://www.linkedin.com/in/zahir-khan1">
                    <rect x="119" y="106" fill="#fff" opacity={opaque} width="100" height="100"
                    onMouseEnter= {() => setOpaque(0.3)}
                    onMouseLeave={() => setOpaque(0)}></rect>
                </a><a href="https://www.linkedin.com/in/danielschenker">
                    <rect x="229" y="59" fill="#fff" opacity={opaque1} width="100" height="100"
                    onMouseEnter= {() => setOpaque1(0.3)}
                    onMouseLeave={() => setOpaque1(0)}></rect>
                </a><a href="https://www.linkedin.com/in/runschelbi">
                    <rect x="336" y="34" fill="#fff" opacity={opaque2} width="100" height="100"
                    onMouseEnter= {() => setOpaque2(0.3)}
                    onMouseLeave={() => setOpaque2(0)}></rect>
                </a><a href="https://www.linkedin.com/in/dr-anup-nastik-7b8ba6155">
                    <rect x="456" y="79" fill="#fff" opacity={opaque3} width="100" height="100"
                    onMouseEnter= {() => setOpaque3(0.3)}
                    onMouseLeave={() => setOpaque3(0)}></rect>
                </a>
            </svg>
        </div>
    )
};

export default ImageMapComponent;
