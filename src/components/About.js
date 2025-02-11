import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import kisahKamiImage from '../assets/bglgi.png'; // Ganti dengan path gambar yang sesuai
import aboutPic from '../assets/About 1.png';

const About = () => {
    const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

    return (
        <section
            id="about"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${kisahKamiImage})`,
            }}
            className="bg-cover bg-center min-h-screen flex items-center overflow-x-hidden"
        >
            <div className="flex justify-center">
                <img src={aboutPic} className="w-1/3" alt="abtpict"/>
                <div className="pl-20 w-1/2">
                    <h1 className="font-jdl text-he1 text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">
                        KISAH KAMI
                    </h1>
                    <p className="text-p1 text-kcl font-mnu font-thin text-justify -tracking-wider text-indent-3">
                        Perjalanan kami dimulai dari langkah kecil Pak Min yang belajar meracik mie ayam di Yogyakarta.
                        Dengan kerja keras dan ketekunan, usaha ini tumbuh dari gerobak keliling.
                    </p>
                    <button
                        className="mt-8 px-6 py-2 border border-[#f09d21] text-[#f09d21] rounded-full hover:bg-orange-400 hover:text-black transition duration-500"
                        onClick={() => navigate('/detailabout')} // Navigasi ke halaman detail
                    >
                        Selengkapnya →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
