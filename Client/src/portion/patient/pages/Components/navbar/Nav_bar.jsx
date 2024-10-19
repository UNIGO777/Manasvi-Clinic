import { Link } from 'react-router-dom';
import Dash_logo from '../../../../../../src/assets/Dash_logo.png'

const navItems = [
  { name: 'Home', path: '/navbar/Home' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Appointments', path: '/appointments' },
  { name: 'Specialists', path: '/specialists' },
];

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-25 backdrop-blur-md  shadow-lg p-8 px-20 fixed w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={Dash_logo} alt="Logo" className="h-12 w-auto mr-4 " />
          </div>
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="text-white hover:text-blue-700 ">
                <h1 className='text-shadow-lg'>{item.name}</h1>
              </Link>
            ))}
            <div className="flex items-center text-white hover:text-blue-700">
              <span className="mr-2">&#9742;</span>
              <span>123-456-7890</span>
            </div>
            <Link to="/profile" className="text-white">
              <span>&#128100;</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;

