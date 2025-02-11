import React from 'react';

const Lokasi = () => {
  return (
    <section className="bg-bckg text-white min-h-full py-16 px-8">
      <div className="container mx-auto">
        {/* Header and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-8xl font-jdl text-transparent bg-clip-text bg-gradient-to-b from-orange-600 to-amber-400 mb-4">TEMUKAN KAMI</h2>
            <p className="text-2xl font-light text-paper font-mnu pl-2">
              Nikmati cita rasa hidangan kami di lokasi-lokasi berikut:
            </p>
            <ul className="list-decimal ml-8 mt-4 text-lg text-paper font-thin font-mnu">
              <li>Jl. Tri Lomba Juang No. 20</li>
              <li>Jl. Gajah Raya No. 52</li>
              <li>Jl. Parang Kesit Raya</li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="mt-8 mr-5">
            <div className="w-full h-[500px]"> {/* Ukuran peta diperbesar */}
              <iframe
                title="Google Maps Semarang"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3955.444949614317!2d110.41498747447882!3d-7.024705170850132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c31c7a5d91f%3A0x4852b97b4d90adf3!2sJl.%20Tri%20Lomba%20Juang%20No%2020%2C%20Semarang!5e0!3m2!1sen!2sid!4v1674567891234!5m2!1sen!2sid&q=Jl.%20Tri%20Lomba%20Juang%20No%2020,%20Semarang&markers=color:red%7C-7.024705170850132,110.41498747447882%7C-7.031705,110.418974%7C-7.030000,110.420000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lokasi;
