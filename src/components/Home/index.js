import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['F', 'a', 't', 'i', 'm', 'a', 'h']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    return (
        <div className='container home-page'>
            {/* <div className='text-zone'>
                <h1><span className={letterClass}>H</span>
                <span className={ `${letterClass} _12`}>i</span>
                <br />
                <span className={ `${letterClass} _12`}>I</span>
                <span className={ `${letterClass} _12`}>'m</span>
                <img src={LogoTitle} alt='developer' />
                {/* Fatimah  */}
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                index={15} />
                <br />
                {/* Web Developer */}
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                index={15} />
                </h1>
                <h2>Full Stack Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div> */}
        </div>
    )
}

export default Home