import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // Untuk scroll di halaman yang sama
import { Link as RouterLink, useLocation } from "react-router-dom"; // Untuk navigasi halaman
import logo1 from "../assets/logo mi ayam.png";
import judul from "../assets/judulmiaayam.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`${isScrolled ? "bg-bckg shadow-lg" : "bg-bckg shadow-lg"} p-4 text-amber-500 sticky top-0 z-50 transition duration-300`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-5">
                    <img src={logo1} alt="Logo 1" className="h-10 pl-5" />
                    <img src={judul} alt="judul" className="h-10" />
                </div>
                <ul className="flex space-x-5 pr-5">
                    {/* Cek apakah di halaman utama, kalau iya pakai ScrollLink, kalau tidak pakai RouterLink */}
                    <li>
                        {location.pathname === "/" ? (
                            <ScrollLink to="home" smooth={true} duration={500} offset={-70}className="hover:text-amber-400 font-mnu cursor-pointer">
                                HOME
                            </ScrollLink>
                        ) : (
                            <RouterLink to="/" className="hover:text-amber-400 font-mnu">
                                HOME
                            </RouterLink>
                        )}
                    </li>
                    <li>
                        {location.pathname === "/" ? (
                            <ScrollLink to="menu" smooth={true} duration={500} offset={-70} className="hover:text-amber-400 font-mnu cursor-pointer">
                                MENU
                            </ScrollLink>
                        ) : (
                            <RouterLink to="/" className="hover:text-amber-400 font-mnu">
                                MENU
                            </RouterLink>
                        )}
                    </li>
                    <li>
                        {location.pathname === "/" ? (
                            <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="hover:text-amber-400 font-mnu cursor-pointer">
                                ABOUT
                            </ScrollLink>
                        ) : (
                            <RouterLink to="/" className="hover:text-amber-400 font-mnu">
                                ABOUT
                            </RouterLink>
                        )}
                    </li>
                    <li>
                        {location.pathname === "/" ? (
                            <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="hover:text-amber-400 font-mnu cursor-pointer">
                                CONTACT US
                            </ScrollLink>
                        ) : (
                            <RouterLink to="/" className="hover:text-amber-400 font-mnu">
                                CONTACT US
                            </RouterLink>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
