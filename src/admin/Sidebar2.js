import { Link, useLocation } from 'react-router-dom';
import iconMakananNyala from '../assets/makanannyala.png';
import iconMakananMati from '../assets/makananmati.png';
import iconMinumanNyala from '../assets/minumannyala.png';
import iconMinumanMati from '../assets/minumanmati.png';

const Sidebar2 = () => {
  const location = useLocation(); // Ambil lokasi halaman saat ini

  return (
    <div className="sidebar block bg-bckg w-3/4 justify-items-center pt-20 pl-5">
      <ul className='text-paper font-mnu text-p1'>
        <li className='pb-5'>
          <Link to="/makanan">
            <img 
              src={location.pathname === '/makanan' ? iconMakananNyala : iconMakananMati} 
              alt="menu makanan"
            />
          </Link>
        </li>
        <li>
          <Link to="/minuman">
            <img 
              src={location.pathname === '/minuman' ? iconMinumanNyala : iconMinumanMati} 
              alt="menu minuman"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar2;