import React from 'react';

function Footer() {
    return (
        <footer className="center">
            <div>
                <a href='https://github.com/Jordanio49' target='_blank'>
                <img src={require('../../assets/images/github.png')} alt='Github' style={{ height: 50, width: 50}}></img>
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/jordan-thomas-b405379a/' target='_blank'>
                <img src={require('../../assets/images/linkedin.jpg')} alt='LinkedIn' style={{ height: 50, width: 50}}></img>
                </a>
            </div>
            <div>
                <a href='https://stackoverflow.com/users/18175443/jordanio49' target='_blank'>
                <img src={require('../../assets/images/stackoverflow.jpg')} alt='Stack Overflow' style={{ height: 50, width: 50}}></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;