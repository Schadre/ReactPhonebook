import { Link } from 'react-router-dom';
import Background from '../assets/images/Antique.jpeg';
import Navbar from '../components/Navbar';
import FireLogo from "../assets/images/firebase.svg";
import TSLogo from "../assets/images/typescriptlogo.svg";
import ReactLogo from "../assets/images/ReactLogo.svg";
import PostgresLogo from "../assets/images/Postgres.svg";
import FlaskLogo from "../assets/images/flask.svg";
import '../index.css';

function About() {
  return (
    <div 
      style={{ 
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} 
      className='fixed top-0 w-full h-full'>
      <Navbar />
      
      <div

        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          height: '100vh',
          overflowY: 'scroll',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(254, 202, 202) pink'
        }}
      >
        <div>
          <h1 className='text-red-200 flex flex-row justify-center p-20 text-center'>
            A Full-Stack application using React & Flask<br /><br></br>
            that allows users to Sign-In/Sign-Out using Firebase authentication<br /><br></br>
            and allows users the features of creating, updating, and deleting contact cards, <br /> <br></br>
            from a Postgres database through the REST API setup by a token from my back-end Flask application. 
          </h1>
          <div className='flex flex-row justify-center'>
            <img src={ReactLogo} alt="React Logo" className="py-6 mb-20 logo" />
            <img src={FlaskLogo} alt="Firebase Logo" className="py-6 mb-20 logo-5" />
            <img src={PostgresLogo} alt="Postgres Logo" className="py-6 mb-20 logo-4" />
            <img src={TSLogo} alt="TypeScript Logo" className="py-6 mb-20 logo" />
            <img src={FireLogo} alt="Firebase Logo" className="py-6 mb-20 logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
