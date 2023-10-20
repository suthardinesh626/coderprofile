import React from 'react'
import '../style/projectlist.css'
import ProjectItem from '../json/ProjectItem.json'


const ProjectCard =({id, url, websiteName, description})=>{
    return(
        <div className='projectcard' key={id}>
            <a  href={url} id='web-link' ><p  >Link</p></a>
            <div className='web-detail'>
                <h3 className='text-sm'> {websiteName} </h3>
                <p> {description} </p>
            </div>

        </div>
    )
}


const ProjectList = () => {
    return (
        <>
            <div className='project-link' id='Project'>
                {ProjectItem.map((item)=>(
                    <ProjectCard  key={item.id} {...item} />
                ))}
            </div>

        </>
    )
}

export default ProjectList