import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import { motion } from 'framer-motion'
import './index.scss'
import { useEffect, useState } from 'react'
import DarkMode from "./DarkMode/DarkMode"

const Layout = () => {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove); 

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y
    }
  }

  return (
    <div className="App">
      <DarkMode/>
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

      <motion.div
        className='cursor'
        variants={variants}
        animate= "default"
      />
    </div>
  )
}

export default Layout
