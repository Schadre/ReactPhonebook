import Navbar from '../components/Navbar';
import DataCard from '../components/DataCard';
import Background from '../assets/images/connect.jpeg';

function Dashboard() {
  return (
    <div 
      style={{ 
        backgroundImage: `url(${ Background })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} 
      className='fixed top-0 w-full h-full'>
      <Navbar />
      
      <div
        className="overflow-y-scroll"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(5px)',
          height: '100vh',
          overflowY: 'scroll',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(254, 202, 202) pink'
        }}
      >
      <DataCard />
      </div>
  </div>
  );
}

export default Dashboard;
