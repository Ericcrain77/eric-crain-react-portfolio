import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./carousel";
import './style.css';


function About() {
    return (
        <div className="about-section">
            <div className="carousel">
                <Carousel />
            </div>
            <div>
                <h2>About Me</h2>
                <p>
                    Hello! My name is Eric Crain. I am 29 year old student of Vanderbilt University's Full Stack Web Developer Coding Bootcamp.
                </p>
                <p>
                    I am originally from Memphis, TN, but moved to east to go to college at the University of Tennessee at Chattanooga, where I received a Bachelor of Science in Exercise Science: Health and Human Performance degree in 2015. The goal back then was to become a Physical Therapist. I worked at an orthopadeic group here in Chattanooga called Center for Sports Medicine, in their Physical Therapy department as a Physical Therapy Technician from 2014 to 2020. After tenaciously applying for Phyiscal Therapy School multiple times, I came to the conclusion that PT school was not in the cards for me so I took on a new venture. I am currently the Shipping Manager of a wholesale plant nursery where I facilitate and oversee the shipping and receiving of plants of various types and sizes and plant products such as containers, ground cloth, fertilizer, etc. I have always been interested in web development though. In fact, it was one of my three choices when I was choosing a major for my undergraduate degree, and looking back now I know it is what I was meant to choose all along.
                </p>
            </div>
        </div>
    )
};

export default About;