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
      <div className="exp-page" >
        <ParticlesBackground />
        <div className="text-zone dark-hover-exp">
          <h1 className="title h11">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <div className="wholeSkills">
        <FadeDiv>
          <div className="skills">
            <AllSkills />
          </div>
          <TextSphere />
          <div className="stats">
            <img src="https://github-readme-stats.vercel.app/api?username=sajalsatsangi&show_icons=true&locale=en&theme=dark" alt="sajalsatsangi" />
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=sajalsatsangi&theme=dark" alt="sajalsatsangi" />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=sajalsatsangi&show_icons=true&locale=en&layout=compact&theme=dark"
              alt="GitHub Lang Stats"
            />
            <img src="https://leetcard.jacoblin.cool/Sajal_Satsangi?ext=heatmap" alt="LeetCode Stat" />
          </div>
        </FadeDiv>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Skill;
