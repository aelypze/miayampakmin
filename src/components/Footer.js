import React from "react";
import logoftr from "../assets/Logoftr.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link as ScrollLink } from "react-scroll"; // Untuk scroll di halaman yang sama
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"; // Untuk navigasi halaman

const Footer = () => {
  const location = useLocation(); // Ambil lokasi halaman saat ini
  const navigate = useNavigate();

  return (
    <footer className="bg-paper py-10 pr-40 text-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo dan Nama */}
          <div className="text-center md:text-left mb-6 md:mb-5">
            <img src={logoftr} alt="Logoftr" className="w-80 h-30 mx-auto md:mx-0" />
          </div>

          {/* Produk */}
          <div className="text-center md:text-left text-amber-600">
            <h3 className="font-bold text-amber-600">PRODUK</h3>
            <ul>
              <li className="hover:text-amber-500 cursor-pointer" onClick={() => navigate('makanan')}>Makanan</li>
              <li className="hover:text-amber-500 cursor-pointer" onClick={() => navigate('minuman')}>Minuman</li>
            </ul>
          </div>

          {/* Informasi */}
          <div className="text-center md:text-left text-amber-600">
            <h3 className="font-bold text-amber-600">INFORMASI</h3>
            <ul>
              <li>
                {location.pathname === "/" ? (
                  <ScrollLink to="about" smooth={true} duration={500} className="hover:text-amber-500 font-mnu cursor-pointer">
                    About
                  </ScrollLink>
                ) : (
                  <RouterLink to="/#about" className="hover:text-amber-500 font-mnu">
                    About
                  </RouterLink>
                )}
              </li>
              <li>
                {location.pathname === "/" ? (
                  <ScrollLink to="menu" smooth={true} duration={500} className="hover:text-amber-500 font-mnu cursor-pointer">
                    Menu
                  </ScrollLink>
                ) : (
                  <RouterLink to="/#menu" className="hover:text-amber-500 font-mnu">
                    Menu
                  </RouterLink>
                )}
              </li>
              <li>
                {location.pathname === "/" ? (
                  <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-amber-500 font-mnu cursor-pointer">
                    Contact
                  </ScrollLink>
                ) : (
                  <RouterLink to="/#contact" className="hover:text-amber-500 font-mnu">
                    Contact
                  </RouterLink>
                )}
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-amber-600">KONTAK</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/+628996669500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-amber-600 text-4xl md:text-4xl hover:text-amber-500" />
              </a>

              {/* Email */}
              <a
                href="mailto:christmiracleputriardika@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-amber-600 text-4xl md:text-4xl hover:text-amber-500" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/fallnaryu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-amber-600 text-4xl md:text-4xl hover:text-amber-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
