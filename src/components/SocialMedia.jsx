import React from 'react'
import '../style/socialmedia.css'


const SocialMedia = () => {
    return (
        <div className='sticky-social' id='SocialMedia'>

            <div className='logos'>
               <a  href='https://www.linkedin.com/in/dinesh-suthar-01b559159/'> 
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
               </a>
                <a href='https://github.com/suthardinesh626'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
               </a>
               <a href='https://twitter.com/dnessh_' >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" />
               </a>
            </div>
        </div>
    )
}

export default SocialMedia