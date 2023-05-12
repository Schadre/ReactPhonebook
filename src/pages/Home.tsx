import { Link } from 'react-router-dom';
import Background from '../assets/images/ancient.jpeg'
import Navbar from '../components/Navbar';

function Home() {
  return (
    
    <div 
    style={{ 
      backgroundImage: `url(${ Background })`,
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
        height: '100vh'
      }}
      className='flex flex-row justify-center items-center'>
        <h1 className=' text-center text-5xl text-red-200 font-bold hover:text-red-50'>
        <Link to='/dashboard'>Welcome to the Phonebook</Link>
        </h1>
      </div>
      </div>
  );
}

export default Home;