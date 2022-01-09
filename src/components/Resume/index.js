import React from "react";
import { Card } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';
import skills from './skills.js';
import './style.css';

function Resume() {
    return (
        <section>
            <div className='skills row'>
                <h3>Skills</h3>
                <Card className='skills-card col-12'>
                    <Card.Body className='skills-card-body'>
                    {
                        skills && skills.length > 0 && skills.map((skill) => 
                        <Card.Text className="skills-card-text">
                            {skill.name}
                            <br />
                            <i>{skill.icon}</i>
                        </Card.Text>)
                    }
                    </Card.Body>
                </Card>
            </div>
            <div className='resume'>
                <h3>Resume</h3>
                <i><FaFilePdf /></i>
            </div>
        </section>
        
    )
}

export default Resume;