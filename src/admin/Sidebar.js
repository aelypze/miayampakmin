import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoanjay from '../assets/logofull.png';
import iconMakananNyala from '../assets/makanannyala.png';
import iconMakananMati from '../assets/makananmati.png';
import iconMinumanNyala from '../assets/minumannyala.png';
import iconMinumanMati from '../assets/minumanmati.png';

const Sidebar = () => {
  const location = useLocation(); // Cek halaman aktif
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <div className="sidebar bg-bckg w-1/5 h-screen sticky top-0 pt-20 flex flex-col items-center">
      {/* Logo tetap ukuran asli */}
      <img src={logoanjay} alt='' className='w-40 mb-5' /> 

      <ul className='text-paper p-5 font-mnu text-p1 text-center space-y-6'>
        <li>
          <Link to="/admin" onClick={() => setActivePage('/admin')}>
            <img 
              src={activePage === '/admin' ? iconMakananNyala : iconMakananMati} 
              alt="Makanan" 
              className="w-36 inline-block"
            />
          </Link>
        </li>
        <li>
          <Link to="/admin2" onClick={() => setActivePage('/admin2')}>
            <img 
              src={activePage === '/admin2' ? iconMinumanNyala : iconMinumanMati} 
              alt="Minuman" 
              className="w-36 inline-block"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
