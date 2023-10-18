import React from 'react'
import '../style/projectlist.css'
import ProjectItem from '../json/ProjectItem.json'
import {Link } from 'react-router-dom'

const ProjectCard =({id, url, websiteName, description})=>{
    return(
        <div className='projectcard' key={id}>
            <a href={url} >Visit Site</a>
            <div className='web-detail'>
                <h3> {websiteName} </h3>
                <p> {description} </p>
            </div>

        </div>
    )
}


const ProjectList = () => {
    return (
        <>
            <div className='project-link'>
                {ProjectItem.map((item)=>(
                    <ProjectCard  key={item.id} {...item} />
                ))}
            </div>

        </>
    )
}

export default ProjectList