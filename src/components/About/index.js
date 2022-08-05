import React from 'react';
import aboutMeImage from "../../assets/images/profile-pic.jpg";

function About() {
    return (
        <section className='my-5'>
            <div className="center">
            <h1 id='about'>About Me</h1>
            </div>
            <div className="center">
            <img src={aboutMeImage} className="my-2" style={{ height: "25%", width: "25%" }} alt="Jordan Thomas" />
            </div>
            <div className='my-2'>
                <p className="center" >
                    I am a full stack web developer that is looking forward to creating intuitive user experiences on the web.
                    I recently completed a full stack web development course at UC Davis
                    and am excited to start using the skills I have garnered throughout the program.
                    Proficient in Javascript, CSS, React.js and responsive web design with a focus on mobile first development.
                    Strong communicator with experience in leading conversation and directing work flow.
                </p>
            </div>
        </section>
    )
}

export default About;