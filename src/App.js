import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skill' element={<Skill />} />
          <Route path='education' element={<Education />} />
          <Route path='experience' element={<Experience />} />
          <Route path='projects' element={<Projects />} />
          <Route path='resume' element={<Resume />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
