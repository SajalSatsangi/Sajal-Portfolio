import Loader from "react-loaders"
import ParticlesBackground from "../Layout/ParticleBackground";
import AnimatedLetters from '../AnimatedLetters';
import TextShpere from "./TextSphere";
import { useEffect, useState } from "react";

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
      <div className="skills">
        hello
      </div>
      <TextShpere />
      <ParticlesBackground />
      <Loader type="pacman" />
    </>
  )
}

export default Skill