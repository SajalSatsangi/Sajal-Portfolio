import React from "react";

import ReactNativeColor from '../../assets/images/color-logo/react-native.svg'
import ReactColor from '../../assets/images/color-logo/react.svg'
import FigmaColor from '../../assets/images/color-logo/figma.svg'
import JsColor from '../../assets/images/color-logo/javascript.svg'
import CssColor from '../../assets/images/color-logo/css.svg'
import HtmlColor from '../../assets/images/color-logo/html.svg'
import CColor from '../../assets/images/color-logo/c.svg'
import CppColor from '../../assets/images/color-logo/cpp.svg'
import PythonColor from '../../assets/images/color-logo/python.svg'
import JavaColor from '../../assets/images/color-logo/java.svg'
import NodejsColor from '../../assets/images/color-logo/nodejs.svg'
import ExpressjsColor from '../../assets/images/color-logo/express.svg'
import MongoDBColor from '../../assets/images/color-logo/mongodb-icon.svg'
import FirebaseColor from '../../assets/images/color-logo/firebase.svg'
import GitColor from '../../assets/images/color-logo/git.svg'
import TailwindColor from '../../assets/images/color-logo/tailwind-css.svg'
import SASSColor from '../../assets/images/color-logo/sass.svg'
import ArduinoColor from '../../assets/images/color-logo/arduino.svg'
import WordpressColor from '../../assets/images/color-logo/wordpress-icon.svg'
import WixColor from '../../assets/images/color-logo/wix.svg'

import ReactNative from '../../assets/images/vector-logo/react-native.png'
import Cpp from '../../assets/images/vector-logo/c++.png'
import C from '../../assets/images/vector-logo/c.png'
import Express from '../../assets/images/vector-logo/expressjs.png'
import MongoDB from '../../assets/images/vector-logo/mongodb.png'
import Firebase from '../../assets/images/vector-logo/firebase.png'
import Tailwind from '../../assets/images/vector-logo/tailwindcss.png'
import Arduino from '../../assets/images/vector-logo/arduino.png'

import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../../assets/images/profile.jpg'
import {
    faLinkedin, faGithub, faReact, faFigma, faJs, faCss3, faHtml5, faPython, faJava, faNodeJs, faGitAlt, faSass, faWordpress, faWix,
} from '@fortawesome/free-brands-svg-icons';
import { SassColor } from "sass";

const AllSkills = () => {
    return (
        <>
            <div id="main-social" className="main-social-2-container">
                <div className="main-social-2">
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={ReactNativeColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">React-Native</div>
                                        <div className="username">Learning...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <img className="leetcode RColor" src={ReactNative} alt="leetcode" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={ReactColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">React</div>
                                        <div className="username">Learning...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faReact} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={FigmaColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Figma</div>
                                        <div className="username">Advanced &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faFigma} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={JsColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Javascript</div>
                                        <div className="username">Done &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faJs} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={CssColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">CSS</div>
                                        <div className="username">Done &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faCss3} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="main-social-2">
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={HtmlColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">HTML</div>
                                        <div className="username">Done &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faHtml5} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={CColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">C with DSA</div>
                                        <div className="username">Advanced &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab fa-linkedin">
                                    <img className="leetcode RColor" src={C} alt="leetcode" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={CppColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">C++ with STL</div>
                                        <div className="username">Advanced &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <img className="leetcode RColor" src={Cpp} alt="leetcode" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={PythonColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Python</div>
                                        <div className="username">Basics &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faPython} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={JavaColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Java</div>
                                        <div className="username">Medium &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faJava} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="main-social-2">
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={NodejsColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Node.Js</div>
                                        <div className="username">Learning...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faNodeJs} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={ExpressjsColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Express.JS</div>
                                        <div className="username">Learning...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <img className="leetcode RColor" src={Express} alt="leetcode" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={MongoDBColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">MongoDB</div>
                                        <div className="username">Learning...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <img className="leetcode RColor" src={MongoDB} alt="leetcode" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={FirebaseColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Firebase</div>
                                        <div className="username">Learning...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <img className="leetcode RColor" src={Firebase} alt="leetcode" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={GitColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Git</div>
                                        <div className="username">Learning...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faGitAlt} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="main-social-2">
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={TailwindColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Tailwind</div>
                                        <div className="username">Basics &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab fa-linkedin">
                                        <img className="leetcode RColor" src={Tailwind} alt="leetcode" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={SASSColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">SASS</div>
                                        <div className="username">Done &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faSass} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={ArduinoColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Arduino</div>
                                        <div className="username">Done &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <img className="leetcode RColor" src={Arduino} alt="leetcode" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={WordpressColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Wordpress</div>
                                        <div className="username">Done &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab1 fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faWordpress} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="tooltip-container">
                        <div className="tooltip">
                            <div className="profile">
                                <div className="user">
                                    <div class="img">
                                        <img src={WixColor} />
                                    </div>
                                    <div className="details">
                                        <div className="name">Wix</div>
                                        <div className="username">Done &#10003;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <a className="icon">
                                <div className="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fab fa-linkedin">
                                        <FontAwesomeIcon className="light-icon" icon={faWix} size="lg" color="#fff" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllSkills;