import Loader from "react-loaders";
import React from "react";
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import ParticlesBackground from "../Layout/ParticleBackground";
import './index.css'
import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInUp, fadeInUpBig, rubberBand } from 'react-animations';
import LogoImage from "../../assets/images/SajalResume.png";

const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;


const Resume = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [showTimeline, setShowTimeline] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        }
    }, []);

    useEffect(() => {
        const timelineTimeoutId = setTimeout(() => {
            setShowTimeline(true);
        }, 2600);

        return () => {
            clearTimeout(timelineTimeoutId);
        };
    }, []);

    return (
        <>
            <div className="exp-page" >
                <ParticlesBackground />
                <div className="text-zone dark-hover-exp">
                    <h1 className="title h12">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['R', 'e', 's', 'u', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                </div>
            </div>
            {showTimeline && <BouncyDiv className="Resume-div">
                <img className="resumeimg" src={LogoImage} alt="Logo" />
            </BouncyDiv>}
            <Loader type="pacman" />
        </>
    );
}

export default Resume;
