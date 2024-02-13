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
    <div id="mainsocial" className="mainsocialC">
      <br />
      <br />
      <div className="tooltip-container-custom">
        <div className="tooltip-custom">
          <div className="profile-custom">
            <div className="user-custom">
              <div className="img-custom">
                <img src={profile} />
              </div>
              <div className="details-custom">
                <div className="name-custom">LinkedIn</div>
                <div className="username-custom">Sajal Satsangi</div>
              </div>
            </div>
            <div className="about-custom">@sajal-satsangi-547802204</div>
          </div>
        </div>
        <div className="text-custom">
          <a className="icon-custom" target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sajal-satsangi-547802204/'>
            <div className="layer-custom">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab fa-linkedin">
                <FontAwesomeIcon className="icon-color-custom" icon={faLinkedin} size="lg" color="#fff" />
              </span>
            </div>
            <div className="text-custom">LinkedIn</div>
          </a>
        </div>
      </div>
      <br />
      <br />
      <div className="tooltip-container-custom">
        <div className="tooltip-custom">
          <div className="profile-custom">
            <div className="user-custom">
              <div className="img-custom">
                <img src={profile} />
              </div>
              <div className="details-custom">
                <div className="name-custom">Github</div>
                <div className="username-custom">Sajal Satsangi</div>
              </div>
            </div>
            <div className="about-custom">@SajalSatsangi</div>
          </div>
        </div>
        <div className="text-custom">
          <a className="icon-custom" target="_blank" rel='noreferrer' href="https://github.com/SajalSatsangi">
            <div className="layer-custom">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab1 fa-linkedin">
                <FontAwesomeIcon className="icon-color-custom" icon={faGithub} size="lg" color="#fff" />
              </span>
            </div>
            <div className="text-custom">Github</div>
          </a>
        </div>
      </div>
      <br />
      <br />
      <div className="tooltip-container-custom">
        <div className="tooltip-custom">
          <div className="profile-custom">
            <div className="user-custom">
              <div className="img-custom">
                <img src={profile} />
              </div>
              <div className="details-custom">
                <div className="name-custom">Leetcode</div>
                <div className="username-custom">Sajal Satsangi</div>
              </div>
            </div>
            <div className="about-custom">@Sajal_Satsangi</div>
          </div>
        </div>
        <div className="text-custom">
          <a className="icon-custom" target="_blank" rel='noreferrer' href="https://leetcode.com/Sajal_Satsangi/">
            <div className="layer-custom">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab1 fa-linkedin">
                <img className="leetcode RColor" src={Leetcode} alt="leetcode" />
              </span>
            </div>
            <div className="text-custom">Leetcode</div>
          </a>
        </div>
      </div>
    </div>
  );
  
};

export default SocialLink;
