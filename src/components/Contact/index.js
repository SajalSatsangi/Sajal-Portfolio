import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import EmailForm from './EmailForm'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <div id='contact-hover' className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <EmailForm />
                </div>
                <div id='infomap' className="info-map">
                    Sajal Satsangi,
                    <br />
                    Agra,
                    <br />
                    Uttar Pradesh, 282005<br />
                    India <br />
                    <br />
                    <span>Sajal lives here, come over for a cup of coffee :)</span>
                    <br />
                    <br />
                    <span>sajalsatsangi2004@gmail.com</span>
                </div>
            </div >
            <div className="map-wrap">
                <iframe title='unique' id='iframe' className='dark-map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3547.812679400646!2d77.99636497596164!3d27.225030376462374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDEzJzMwLjEiTiA3N8KwNTknNTYuMiJF!5e0!3m2!1sen!2sin!4v1706844709225!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact