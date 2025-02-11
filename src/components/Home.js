import React from "react";

import profile from '../assets/profilemie.png';

const Home = () => {

    const scrollDown = () => {
        // Menggulir sedikit ke bawah (misalnya 500px)
        window.scrollBy({
            top: 600, // Jarak gulir ke bawah (dalam px)
            left: 0,
            behavior: "smooth", // Efek gulir halus
        });
    };

    return (
        <section id="home" className="p-12 bg-paper min-h-screen pt-20">
    <div className="flex justify-center items-center">
        <div className="text-center md:text-left pr-0 md:pr-8">
            <p className="text-he1 font-jdl text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">
                SEMANGKUK
                <br />
                RASA
            </p>
            <p className="text-he3 mb-7 mt-5 text-[#705950] max-w-xs">
            Nikmati semangkuk kebahagiaan dengan cita rasa autentik yang selalu bikin ketagihan!
            </p>
        </div>
        <img
            src={profile}
            alt="Profile"
            className="w-2/5"
        />
        <p className="text-he1 font-jdl text-right pl-8 text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">
            BERAGAM
            <p>NIKMAT</p>
            <button
                onClick={scrollDown} 
                className="px-6 py-3 mt-4 outline outline-1 outline-orange-600 text-orange-600 font-mnu rounded-full hover:bg-orange-400 hover:text-black transition duration-300 text-sm tracking-widest"
            >
                Kenali Kami ↓
            </button>
        </p>
    </div>
</section>

    );
};

export default Home;
