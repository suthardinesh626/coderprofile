import React from 'react'
import '../style/socialmedia.css'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
    return (
        <div className='sticky-social'>

            <div className='logos'>
               
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" />

            </div>
        </div>
    )
}

export default SocialMedia