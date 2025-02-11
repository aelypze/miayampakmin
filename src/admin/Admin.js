import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import logoftr from "../assets/Logoftr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Admin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin'); // pindah ke dashboard setelah login sukses
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="bg-bckg min-h-screen flex justify-center items-center px-10">
      <div className="flex w-full max-w-5xl">
        
        {/* Kiri: Logo dan Teks */}
        <div className="flex flex-col mr-28 ">
          <img src={logoftr} alt="Logo" className="h-16 w-auto object-contain pr-72" />
          <h2 className="text-8xl text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700 font-jdl mb-2">ADMIN LOGIN</h2>
          <p className="text-3xl text-paper text-left font-mnu font-thin">Selamat Datang, Admin</p>
        </div>
  
        {/* Kanan: Form Login */}
        <div className="w-1/2">
          <form onSubmit={handleLogin} className="flex flex-col">
            <label className="text-orange-500 pb-3 font-mnu text-lg font-thin">Email</label>
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 p-2 border border-orange-500 bg-transparent text-white rounded-full mb-7"
            />
            
            <label className="text-orange-500 pb-3 font-mnu text-lg font-thin">Password</label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-3 p-2 border border-orange-500 bg-transparent text-white rounded-full pr-12" // Tambah padding kanan buat ikon
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-700"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} size="lg" />
              </button>
            </div>
            
            <button 
              type="submit"
              className="w-1/3 p-2 bg-gradient-to-r from-orange-400 to-orange-700 text-white rounded-full ml-auto mt-5"
            >
              Masuk →
            </button>
          </form>
        </div>
  
      </div>
    </div>
  );
}  

export default Admin;