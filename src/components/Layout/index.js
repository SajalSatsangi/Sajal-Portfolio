import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/';
import { motion } from 'framer-motion';
import './index.scss';
import { useEffect, useState } from 'react';
import DarkMode from "./DarkMode/DarkMode";
import MouseParticles from 'react-mouse-particles'

const Layout = () => {
  return (
    <>
      <div className="App">

        <DarkMode />
        <Sidebar />
        <div className="page">
          <span className="tags top-tags">&lt;body&gt;</span>

          <Outlet />
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
        <MouseParticles g={1} num={6} color="random" cull="stats,image-wrapper" level={6} />
      </div>
    </>
  );
};

export default Layout;
