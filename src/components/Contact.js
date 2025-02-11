import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
    return (
        <section id="contact" className="min-h-screen bg-paper flex flex-col items-center py-14">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-8xl font-jdl text-transparent bg-clip-text bg-gradient-to-l from-orange-600 to-orange-400">HUBUNGI KAMI</h1>
                <div className="w-80 h-1 bg-[#D67236] mx-auto my-3" />
                <p className="text-lg text-transparent bg-clip-text bg-gradient-to-l from-orange-600 to-orange-400 max-w-xl">
                    Kami siap menerima segala pertanyaan, saran, maupun pesanan Anda.
                </p>
            </div>

            {/* Kontak Section */}
            <div className="bg-[#5A2E1E] w-full py-28 px-6 flex flex-col md:flex-row justify-center items-center gap-32">
                {/* WhatsApp */}
                <a
                    href="https://wa.me/+628996669500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-amber-500 text-4xl md:text-8xl transform transition-transform duration-300 hover:scale-110" />
                    <h3 className="text-2xl font-semibold text-[#EBA66B] mt-4">Whatsapp</h3>
                </a>
                
                {/* Email */}
                <a
                    href="mailto:christmiracleputriardika@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="text-amber-500 text-4xl md:text-8xl transform transition-transform duration-300 hover:scale-110" />
                    <h3 className="text-2xl font-semibold text-[#EBA66B] mt-4">Email</h3>
                </a>
                
                {/* Instagram */}
                <a
                    href="https://instagram.com/fallnaryu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                >
                    <FontAwesomeIcon icon={faInstagram} className="text-amber-500 text-4xl md:text-8xl transform transition-transform duration-300 hover:scale-110" />
                    <h3 className="text-2xl font-semibold text-[#EBA66B] mt-4">Instagram</h3>
                </a>
            </div>
        </section>
    );
};

export default ContactUs;
