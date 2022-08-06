import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            name: 'Find Pods Fast',
            description: 'This is an application that allows the user to search top podcasts by genre, and informs them whether or not there are any upcoming live events.',
            image: 'find-pods-fast.png',
            technologies: ['HTML/CSS', 'JavaScript', 'APIs', 'Materialize'],
            deployed: 'https://jordanio49.github.io/find-pods-fast/',
            github: 'https://github.com/Jordanio49/find-pods-fast',
        },
        {
            name: 'Budget Tracker',
            description: 'Budget tracker is a Progressive Web Application that allows the user to manage their finances both on and offline.',
            image: 'budget-tracker.png',
            technologies: ['JavaScript', 'MongoDB', 'Service Workers', 'Node.js', 'Express'],
            deployed: 'https://jordan-thomas-budget-tracker.herokuapp.com/',
            github: 'https://github.com/Jordanio49/PWA-Budget-Tracker',
        },
        {
            name: 'Just Recipes',
            description: 'This application allows the user to create and post recipes, and leaves no space for silly long backstories from the author.',
            image: 'just-recipes.png',
            technologies: ['HTML/CSS', 'JavaScript', 'Express', 'Heroku', 'Handlebars.js', 'Sequelize'],
            deployed: 'https://just-recipes00.herokuapp.com/',
            github: 'https://github.com/mpeterson56/Just-Recipes',
        },
        {
            name: 'Note Taker',
            description: 'Note Taker is an application that can be used to write, save, edit, and delete notes using the CRUD operations',
            image: 'note-taker.png',
            technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
            deployed: 'https://note-taker-jordan-thomas.herokuapp.com/notes',
            github: 'https://github.com/Jordanio49/Note-Taker',
        },
        {
            name: 'Work Day Schedule',
            description: 'Work day schedule allows the user to schedule out their day in the work place. The color of the box for each hour changes along with the current time.',
            image: 'workday-schedule.png',
            technologies: ['HTML/CSS', 'JavaScript', 'Moment -npm', 'Bootstrap'],
            deployed: 'https://jordanio49.github.io/work-day-schedule/',
            github: 'https://github.com/Jordanio49/work-day-schedule',
        },
        {
            name: 'Tech Blog',
            description: 'Tech Blog allows the user to signup or login. Then they can create posts and comment on posts. They can also edit and delete posts as needed',
            image: 'tech-blog.png',
            technologies: ['HTML/CSS', 'JavaScript', 'Bcrypt', 'Express', 'Sequelize', 'Dotenv', 'Handlebars'],
            deployed: 'https://jordan-thomas-tech-blog.herokuapp.com/login',
            github: 'https://github.com/Jordanio49/Tech-Blog',
        },
    ];

    return(
        <section>
            <div className='center'>
                <h1>My Project Portfolio</h1>
            </div>
            <div className='center'>
                <ul className='flex-row'>
                    <li>
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li>
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
                <ul className='flex-row'>
                    <li>
                        <Project projects={projects[2]}></Project>
                    </li>
                    <li>
                        <Project projects={projects[3]}></Project>
                    </li>
                </ul>
                <ul className='flex-row'>
                    <li>
                        <Project projects={projects[4]}></Project>
                    </li>
                    <li>
                        <Project projects={projects[5]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;