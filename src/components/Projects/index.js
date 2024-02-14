import Loader from "react-loaders"
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import ParticlesBackground from "../Layout/ParticleBackground";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCards from "./projectCards";
import { projects } from './data/constants'
import './index.css'
import ProjectDetails from './ProjectDetails'
import './default'

const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

const Projects = () => {

    const [openModal, setOpenModal] = useState({ state: false, project: null });

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

    const [toggle, setToggle] = useState('all');

    return (
        <>
            <div className="exp-page" >
                <ParticlesBackground />
                <div className="text-zone dark-hover-exp">
                    <h1 className="title h12">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
                    </p>
                </div>
            </div>
            {showTimeline && <BouncyDiv className="Project-div">

                <Container id="projects">
                    <Wrapper>
                        <ToggleButtonGroup >
                            {toggle === 'all' ?
                                <ToggleButton className="Togglebutton2" active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                                :
                                <ToggleButton className="Togglebutton" value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                            }
                            <Divider className="Divider" />
                            {toggle === 'web app' ?
                                <ToggleButton className="Togglebutton2" active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
                                :
                                <ToggleButton className="Togglebutton" value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
                            }
                            <Divider className="Divider" />
                            {toggle === 'android app' ?
                                <ToggleButton className="Togglebutton2" active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
                                :
                                <ToggleButton className="Togglebutton" value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
                            }
                            <Divider className="Divider" />
                            {toggle === 'machine learning' ?
                                <ToggleButton className="Togglebutton2" active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
                                :
                                <ToggleButton className="Togglebutton" value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
                            }
                        </ToggleButtonGroup>
                        <div  className="Project-div-2">
                            <CardContainer>
                                {toggle === 'all' && projects
                                    .map((project) => (
                                        <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal} />
                                    ))}
                                {projects
                                    .filter((item) => item.category == toggle)
                                    .map((project) => (
                                        <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal} />
                                    ))}
                            </CardContainer>
                        </div>
                    </Wrapper>
                </Container>
            </BouncyDiv>}
            {openModal.state &&
                <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            }
            <Loader type="pacman" />
        </>
    );
}

export default Projects