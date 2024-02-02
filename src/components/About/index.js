import { useEffect, useState } from 'react'
import {
    faAngular,
    faCss3,
    faFigma,
    faGitAlt,
    faHtml5,
    faJava,
    faJsSquare,
    faPython,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

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
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Hello, I'm Sajal Satsangi from Agra, India. Currently, I am pursuing a Bachelor's degree in Mechanical Engineering with a specialization in Computer Science.                    </p>
                    <p>
                        As a Frontend developer, I relish taking on fresh challenges and consistently broadening my skillset. I possess proficiency in C++ and knowledge in programming languages including C, JavaScript, HTML & CSS, Java, and Python.                    </p>
                    <p>
                        I am deeply passionate about leveraging React-Native, Figma, and contemporary JavaScript libraries and frameworks such as React.js. Additionally, I actively engage in problem-solving using Data Structures and Standard Template Library (STL).
                        I am also interested in building new Web Technologies.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faFigma} color="#0ACF83" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faJava} color="#fff" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
