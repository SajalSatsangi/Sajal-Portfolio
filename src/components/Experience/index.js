import Loader from "react-loaders";
import { ReactComponent as WorkIcon } from "../../assets/images/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/images/school.svg";
import timelineElements from "./timelineElements.js";
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.css';
import './index.scss';
import ParticlesBackground from "../Layout/ParticleBackground";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    const [letterClass, setLetterClass] = useState('text-animate');
    const [showTimeline, setShowTimeline] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
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
            <div className="exp-page">
                <ParticlesBackground />
                <div className="text-zone dark-hover-exp">
                    <h1 className="title h1">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e', 's']}
                            idx={15}
                        />
                    </h1>
                </div>
            </div>
            <div id="hover-exp" className="dark-hover-exp" style={{ height: '69%', overflow: 'auto', marginTop: '-15px', marginLeft: '100px' }}>
                {showTimeline && (
                    <VerticalTimeline>
                        {timelineElements.map((element) => {
                            let isWorkIcon = element.icon === "work";
                            let showButton =
                                element.buttonText !== undefined &&
                                element.buttonText !== null &&
                                element.buttonText !== "";

                            return (
                                <VerticalTimelineElement
                                    key={element.id}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                                >
                                    <div className="title-college">
                                        {element.images && (
                                            <div className="college-images">
                                                {element.images.map((image, index) => (
                                                    <img key={index} src={image} alt={`experience-img-${index}`} />
                                                ))}
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="vertical-timeline-element-title">
                                                {element.title}
                                            </h3>
                                            <h5 className="vertical-timeline-element-subtitle">
                                                {element.location}
                                            </h5>
                                        </div>
                                    </div>
                                    <p id="description">{element.description}</p>
                                    {showButton && (
                                        <a
                                            className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                                                }`}
                                            href={element.buttonLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {element.buttonText}
                                        </a>
                                    )}
                                </VerticalTimelineElement>
                            );
                        })}
                    </VerticalTimeline>
                )}
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Experience;
