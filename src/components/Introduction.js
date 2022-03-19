import React from 'react';
import "./Introduction.css"
import Me from "../Img/me.png"

const Introduction = () => {
    return (
        <div className='Intro'>
            <div className='Intro-left'>
                <div className='Intro-left-wrapper'>
                    <h2 className='Intro-top'>Hello, My name is</h2>
                    <h1 className='Intro-name'>Omar AboElazaim</h1>
                    <div className='Intro-title'>
                        <div className='Intro-title-wrapper'>
                            <div className='Intro-title-name'>Computer Engineer</div>
                            <div className='Intro-title-name'>Web Developer</div>
                            <div className='Intro-title-name'>UI/UX Designer</div>
                            <div className='Intro-title-name'>Application Developer</div>
                            <div className='Intro-title-name'>Software Developer</div>
                            <div className='Intro-title-name'>Traveller</div>
                        </div>
                    </div>
                    <div className='Intro-description'>
                        I am an enthusiastic Computer Engineer 
                        eager to contribute to team success through hard work, attention to detail and
                        excellent organizational skills.
                    </div>
                </div>
            </div>
            <div className='Intro-right'>
                <div className='Intro-img-background'></div>
                <img src= {Me} alt='' className='Intro-img' />
            </div>
        </div>
    );
};

export default Introduction;