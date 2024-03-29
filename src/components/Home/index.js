import './index.scss'
import './index.css'
import sajal from '../../assets/images/profile.jpg'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import ParticlesBackground from '../Layout/ParticleBackground'
import Hello from '../../assets/Hello.gif'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'j', 'a', 'l'];
    const surnameArray = ['a', 't', 's', 'a', 'n', 'g', 'i'];
    const jobArray3 = ['U', 'I', ' ', 'd', 'e', 's', 'i', 'g', 'n', 'e', 'r', ' ', ' ', '&'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ', ','];
    const jobArray2 = ['A', 'n', 'd', 'r', 'o', 'i', 'd', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 8000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);


    return (
        <div id='homePage' className='container home-page-dark'>
            <section id='section' className='section'>
                <div className="logo-container">
                    <div className='content'>
                        <img src={sajal} />
                        <h2>Android Developer<br /><span>UX/UI Designer</span></h2>
                        <Link to='/contact' className='a'>contact me</Link>
                    </div>
                </div>
            </section>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <img className='Hello' src={Hello} alt='developer' />
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img className='LogoTitle' src={LogoTitle} alt='developer' />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={surnameArray}
                        idx={19} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={26} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray3}
                        idx={41} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray2}
                        idx={55} />
                </h1>
                <h2>Frontened Developer/ UI Designer/ React-Native Developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <ParticlesBackground />

        </div>
    )
}

export default Home