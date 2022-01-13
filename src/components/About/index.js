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
                    Hello! My name is Christopher Eric Crain, but I just go by Eric. I am 29 years old, married to a loving wife who's name is Catherine, and our dog is a Golden Retriever/Great Pyrenees Mix named Mando (after 'The Mandalorian'). I am originally from Memphis, TN, but currently live in Chattanooga, TN. I am nerdy for Star Wars, Video Games, Table Top Games (such as Dungeons & Dragons, Magic: The Gathering, and various Board Games), and I love sports (I am a big fan of the Dallas Cowboys, Pittsburgh Penguins, Memphis Grizzlies, Atlanta Braves, Arkansas Razorbacks, UT Volunteers, and Notre Dame football). 
                </p>
                <p>
                    I moved East Tennessee to go to college at the University of Tennessee at Chattanooga, where I received a Bachelor of Science degree in 2015. The goal back then was to go to school to become a Physical Therapist. I worked at an orthopedic group, Center for Sports Medicine, here in Chattanooga in the Physical Therapy department as a Therapy Technician from 2014 to 2020. After tenaciously applying to Phyiscal Therapy School several times, I came to the conclusion that PT school was just not in the cards for me. I took on a new venture, and now am currently the Shipping Manager of a wholesale plant nursery where I facilitate the shipping and receiving of various plants and plant products such as containers, ground cloth, fertilizer, etc. I have always been interested in web development though. In fact, it was one of my three choices when deciding my major in college, and looking back now I know it is what I was meant to choose all along.
                </p>
            </div>
        </div>
    )
};

export default About;