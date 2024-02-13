import React from "react";
import Leetcode from '../../assets/images/leetcode 1.png'
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../../assets/images/profile.jpg'
import {
  faLinkedin,
  faGithub,
  // Add more icons as needed
} from '@fortawesome/free-brands-svg-icons';

const SocialLink = () => {
  return (
    <div className="main-social">
      <br />
      <br />
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div class="img">
                <img src={profile} />
              </div>
              <div className="details">
                <div className="name">LinkedIn</div>
                <div className="username">Sajal Satsangi</div>
              </div>
            </div>
            <div className="about">@sajal-satsangi-547802204</div>
          </div>
        </div>
        <div className="text">
          <a className="icon" target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sajal-satsangi-547802204/'>
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab fa-linkedin">
                <FontAwesomeIcon icon={faLinkedin} size="lg" color="#fff" />
              </span>
            </div>
            <div className="text">LinkedIn</div>
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
                <img src={profile} />
              </div>
              <div className="details">
                <div className="name">Github</div>
                <div className="username">Sajal Satsangi</div>
              </div>
            </div>
            <div className="about">@SajalSatsangi</div>
          </div>
        </div>
        <div className="text">
          <a className="icon" target="_blank" rel='noreferrer' href="https://github.com/SajalSatsangi">
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab1 fa-linkedin">
                <FontAwesomeIcon icon={faGithub} size="lg" color="#fff" />
              </span>
            </div>
            <div className="text">Github</div>
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
                <img src={profile} />
              </div>
              <div className="details">
                <div className="name">Leetcode</div>
                <div className="username">Sajal Satsangi</div>
              </div>
            </div>
            <div className="about">@Sajal_Satsangi</div>
          </div>
        </div>
        <div className="text">
          <a className="icon" target="_blank" rel='noreferrer' href="https://leetcode.com/Sajal_Satsangi/">
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab1 fa-linkedin">
                <img className="leetcode" src={Leetcode} alt="leetcode" />
              </span>
            </div>
            <div className="text">Leetcode</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
