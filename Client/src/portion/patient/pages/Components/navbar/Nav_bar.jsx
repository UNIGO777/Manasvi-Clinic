import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/navbar/Home' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Appointments', path: '/appointments' },
];

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-4 fixed w-full z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">Patient Portal</div>
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="text-white hover:text-blue-200">
                {item.name}
              </Link>
            ))}
            <div className="flex items-center text-white">
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

