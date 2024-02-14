import Loader from "react-loaders"
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import ParticlesBackground from "../Layout/ParticleBackground";
import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInUp, fadeInUpBig, rubberBand } from 'react-animations';

const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;


const Projects = () => {

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
            <ParticlesBackground />
            <div className="text-zone dark-hover-exp">
                <h1 className="title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                    />
                </h1>
            </div>
            {showTimeline && <BouncyDiv className="Resume-div">
                {/* <img className="resumeimg" src={LogoImage} alt="Logo" /> */}
            </BouncyDiv>}
            <Loader type="pacman" />
        </>
    );
}

export default Projects