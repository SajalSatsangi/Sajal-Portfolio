import Loader from "react-loaders";
import ParticlesBackground from "../Layout/ParticleBackground";
import AnimatedLetters from '../AnimatedLetters';
import TextSphere from "./TextSphere";
import { useEffect, useState } from "react";
import AllSkills from "./allSkills";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
  animation: 8s ${fadeInAnimation};
`;

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="text-zone dark-hover-exp">
        <h1 className="title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['S', 'k', 'i', 'l', 'l', 's']}
            idx={15}
          />
        </h1>
      </div>
      <FadeDiv>
        <div className="skills">
          <AllSkills />
        </div>
        <TextSphere />
        <ParticlesBackground />
      </FadeDiv>
      <Loader type="pacman" />
    </>
  );
}

export default Skill;
