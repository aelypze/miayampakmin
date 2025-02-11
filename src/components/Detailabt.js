import React from "react";
import aboutPic from '../assets/About 1.png';

const DetailAbt = () => {
    return (
        <section id="detailabt" className="relative min-h-screen flex flex-col items-center bg-bckg">

            <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-7xl font-jdl text-transparent bg-clip-text bg-gradient-to-b from-orange-600 to-amber-400 text-center mt-4">
                Kisah Kami
            </h1>

            <div className="flex justify-center mt-36">
                <img src={aboutPic} className="w-1/3" alt="About Us" />
                <div className="pl-20 w-1/2">
                    <p className="mt-4 text-3xl font-thin text-abt font-mnu text-justify -tracking-wider text-indent-3">
                        Perjalanan kami dimulai dari langkah kecil Pak Min yang belajar meracik mie ayam di Yogyakarta.
                        Dengan kerja keras dan ketekunan, usaha ini tumbuh dari gerobak keliling hingga menjadi warung
                        yang dikenal luas. Hingga kini, kami tetap menjaga rasa autentik dan kualitas terbaik yang
                        diwariskan lintas generasi.
                    </p>
                    <a
                        href="/"
                        className="inline-block mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
                    >
                        Kembali ke Beranda
                    </a>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="mt-20 w-full max-w-5xl">
                <h2 className="text-7xl font-jdl text-transparent bg-clip-text bg-gradient-to-b from-orange-600 to-amber-400 text-left mb-10">Perjalanan Kami</h2>
                <div className="relative border-l-2 border-orange-500 pl-12">
                    <div className="mb-10">
                        <div className="absolute -left-5 w-10 h-10 bg-mknn rounded-full"></div>
                        <h3 className="text-4xl font-jdl text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">1980-an</h3>
                        <p className="mt-2 text-xl font-light font-mnu text-abt pl-6 text-justify -tracking-wider text-indent-3">
                            Kami memulai dari Yogyakarta, ketika Pak Min berguru dan bekerja dengan seorang pedagang mie ayam yang berpengalaman.
                        </p>
                    </div>
                    <div className="mb-10">
                        <div className="absolute -left-5 w-10 h-10 bg-mknn rounded-full"></div>
                        <h3 className="text-4xl font-jdl text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">1990-2004</h3>
                        <p className="mt-2 text-xl font-light font-mnu text-abt pl-6 text-justify -tracking-wider text-indent-3">
                        Setelah pindah ke Semarang, kami memulai berjualan dengan gerobak keliling hingga akhirnya menetap di depan Tri Lomba Juang, lalu pindah ke Jalan Pandanaran 2.
                        </p>
                    </div>
                    <div className="mb-10">
                        <div className="absolute -left-5 w-10 h-10 bg-mknn rounded-full"></div>
                        <h3 className="text-4xl font-jdl text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">2004-2008</h3>
                        <p className="mt-2 text-xl font-light font-mnu text-abt pl-6 text-justify -tracking-wider text-indent-3">
                        Ketika kami menetap di Jalan Parangkesit Raya, Tlogosari, Pak Min wafat, dan usaha ini diteruskan oleh istri beliau dengan penuh semangat.
                        </p>
                    </div>
                    <div className="mb-10">
                        <div className="absolute -left-5 w-10 h-10 bg-mknn rounded-full"></div>
                        <h3 className="text-4xl font-jdl text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">2008-2024</h3>
                        <p className="mt-2 text-xl font-light font-mnu text-abt pl-6 text-justify -tracking-wider text-indent-3">
                        Kami kembali ke Jalan Pandanaran 2, terus melayani pelanggan dengan rasa mie ayam yang selalu terjaga.
                        </p>
                    </div>
                    <div className="mb-10">
                        <div className="absolute -left-5 w-10 h-10 bg-mknn rounded-full"></div>
                        <h3 className="text-4xl font-jdl text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">2024-SEKARANG</h3>
                        <p className="mt-2 text-xl font-light font-mnu text-abt pl-6 text-justify -tracking-wider text-indent-3">
                        Kini kami berada di Jalan Tri Lomba Juang nomor 20, melanjutkan tradisi dan rasa yang selalu Anda cintai.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailAbt;
