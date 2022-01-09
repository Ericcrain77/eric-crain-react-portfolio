import React from 'react';
import { FaHtml5, FaCss3, FaNode, FaReact, FaAngular } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql, SiMongodb } from 'react-icons/si';

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 style={{color: '#e34c26', fontSize: '4rem'}} />,
    },
    {
        name: "CSS",
        icon: <FaCss3 style={{color: '#264de4', fontSize: '4rem'}}/>,
        
    },
    {
        name: "JavaScript",
        icon: <IoLogoJavascript style={{color: '#f0db4f', fontSize: '4rem'}}/>,
        
    },
    {
        name: "Node.js",
        icon: <FaNode style={{color: '#3c873a', fontSize: '4rem'}}/>,
        
    },
    {
        name: "MySQL",
        icon: <SiMysql style={{color: '#00758F', fontSize: '4rem'}}/>,
        
    },
    {
        name: "MongoDB",
        icon: <SiMongodb style={{color: '#4DB33D', fontSize: '4rem'}}/>,
        
    },
    {
        name: "React",
        icon: <FaReact style={{color: '#61DBFB', fontSize: '4rem'}}/>,
        
    },
    {
        name: "Angular",
        icon: <FaAngular style={{color: '#dd1b16', fontSize: '4rem'}}/>,
        
    }
]

export default skills;