import React from 'react'
import '../style/Aboutme.css'
import gitQR from '../Image/gitQR.png'

const AboutMe = () => {
    return (
        <>
            <div className='about-detail' id='Home'>
                <div className='deatil-text'>
                    <h1 id='' >Hello, I'm Dinesh Suthar</h1>
                    <h2>a skilled React Developer proficient in ReactJS, Redux, HTML, CSS (including Tailwind CSS), SQL, and JavaScript. With a keen eye for design, I specialize in creating dynamic and responsive user interfaces. I bring a problem-solving mindset and a commitment to clean, scalable code to every project. My goal is to contribute to innovative development projects, leveraging my expertise to deliver impactful and user-friendly digital experiences. </h2>
                </div>
                <div className='gitQR-link'>
                    <img src={gitQR} />
                </div>
            </div>
        </>
    )
}

export default AboutMe;