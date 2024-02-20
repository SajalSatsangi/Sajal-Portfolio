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
            <ParticlesBackground />
            <div className="exp-page" >
                <div className="text-zone dark-hover-exp">
                    <h1 className="title h12">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                    {showTimeline && <BouncyDiv>
                        <p>
                            I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
                        </p>
                    </BouncyDiv>}
                </div>
            </div>
            {showTimeline && <BouncyDiv className="Project-div">

                <Container id="projects">
                    <Wrapper>
                        <ToggleButtonGroup >
                            {toggle === 'all' ?
                                <ToggleButton id="tb21" className="Togglebutton2" active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                                :
                                <ToggleButton id="tb1" className="Togglebutton" value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                            }
                            <Divider id="Divider1" className="Divider" />
                            {toggle === 'web app' ?
                                <ToggleButton id="tb22" className="Togglebutton2" active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
                                :
                                <ToggleButton id="tb2" className="Togglebutton" value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
                            }
                            <Divider id="Divider2" className="Divider" />
                            {toggle === 'android app' ?
                                <ToggleButton id="tb23" className="Togglebutton2" active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
                                :
                                <ToggleButton id="tb3" className="Togglebutton" value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
                            }
                            <Divider id="Divider3" className="Divider" />
                            {toggle === 'UI Designing' ?
                                <ToggleButton id="tb24" className="Togglebutton2" active value="UI Designing" onClick={() => setToggle('UI Designing')}>UI DESIGNING</ToggleButton>
                                :
                                <ToggleButton id="tb4" className="Togglebutton" value="UI Designing" onClick={() => setToggle('UI Designing')}>UI DESIGNING</ToggleButton>
                            }
                            <Divider id="Divider4" className="Divider" />
                            {toggle === 'others' ?
                                <ToggleButton id="tb25" className="Togglebutton2" active value="others" onClick={() => setToggle('others')}>OTHERS</ToggleButton>
                                :
                                <ToggleButton id="tb5" className="Togglebutton" value="others" onClick={() => setToggle('others')}>OTHERS</ToggleButton>
                            }
                        </ToggleButtonGroup>
                        <div className="Project-div-2">
                            <CardContainer>
                                {toggle === 'all' && projects
                                    .map((project) => (
                                        <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal} />
                                    ))}
                                {projects
                                    .filter((item) => item.category?.includes(toggle))
                                    .map((project) => (
                                        <ProjectCards
                                            key={project.id}
                                            project={project}
                                            openModal={openModal}
                                            setOpenModal={setOpenModal}
                                        />
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