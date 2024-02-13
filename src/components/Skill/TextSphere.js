import React, { useEffect } from "react";
import "./TextSphere.css";
import TagCloud from "TagCloud";

const TextShpere = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "React-Native",
      "React",
      "Figma",
      "JavaScript",
      "HTML",
      "CSS",
      "C with DSA",
      "C++ with STL",
      "Python",
      "Java",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Firebase",
      "Git",
      "Tailwind",
      "Sass",
      "Arduino IDE",
      "WordPress",
      "Wix",
  ];  

    const options = {
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <div  id="textSphere" className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextShpere;
