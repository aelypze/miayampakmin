import React, { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import Sidebar from './Sidebar';
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Plus } from "lucide-react";


const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [minuman, setMinuman] = useState([]);
  const [newMinuman, setNewMinuman] = useState({ name: '', description: '', link: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentMinumanId, setCurrentMinumanId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          navigate('/adminlogin');
        } else {
          setIsAdmin(true);
        }
      });
      return () => unsubscribe();
    }, [navigate]);

    useEffect(() => {
      const fetchMinuman = async () => {
        const querySnapshot = await getDocs(collection(db, "minuman"));
        setMinuman(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      };
      fetchMinuman();
    }, [isAdmin]);

    const handleAddMinuman = async (e) => {
      e.preventDefault();
      if (!newMinuman.link) {
        alert("Tunggu sebentar, gambar masih diunggah!");
        return;
      }
      const docRef = await addDoc(collection(db, 'minuman'), newMinuman);
      setMinuman([...minuman, { id: docRef.id, ...newMinuman }]);
      setNewMinuman ({ name: '', description: '', link: '' });
      setSelectedImage(null);
      setIsPopupOpen(false);
    };

    const handleDeleteMinuman = async (id) => {
      await deleteDoc(doc(db, 'minuman', id));
      setMinuman(minuman.filter(item => item.id !== id));
    };

    const startEditingMinuman = (item) => {
      setIsEditing(true);
      setNewMinuman({ name: item.name, description: item.description, link: item.link });
      setCurrentMinumanId(item.id);
      setSelectedImage(item.link);
      setIsPopupOpen(true);
    };

    const handleUpdateMinuman = async (e) => {
      e.preventDefault();
      const minumanRef = doc(db, 'minuman', currentMinumanId);
      await updateDoc(minumanRef, newMinuman);

      setMinuman(minuman.map((item) => (item.id === currentMinumanId ? { id: currentMinumanId, ...newMinuman } : item)));
      setIsEditing(false);
      setNewMinuman({ name: '', description: '', link: '' });
      setCurrentMinumanId(null);
      setSelectedImage(null);
      setIsPopupOpen(false);
    };

      const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "miayam");
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        try {
          alert("Sedang mengunggah...");
          const response = await fetch("https://api.cloudinary.com/v1_1/dpc8frs9p/image/upload", {
            method: "POST",
            body: formData,
          });
          const data = await response.json();
          if (data.secure_url) {
            alert("Gambar berhasil diunggah!");
            setNewMinuman((prev) => ({ ...prev, link: data.secure_url }));
          } else {
            alert("Upload gagal, pastikan Upload Preset benar.");
          }
        } catch (error) {
          alert("Terjadi kesalahan saat mengunggah gambar.");
        }
      };

      if (!isAdmin) {
        return null;
      }

      return (
        <div className="admin-dashboard bg-paper flex grid-cols-2">
          <Sidebar />
          <div className='flex flex-col w-full mt-10 mr-5 ml-5'>
            <div className="content flex mb-5">
              <h2 className='font-jdl text-5xl text-bckg'>MINUMAN</h2>
              <button onClick={signOut} className='bg-bckg w-20 h-10 ml-auto rounded-xl text-paper font-mnu mb-5'>logout</button>
            </div>
            <button onClick={() => setIsPopupOpen(true)} className='w-full h-48 bg-white text-gray-400 rounded-xl flex flex-col items-center justify-center text-lg gap-2 cursor-crosshair'>
              <Plus size={40} />
              Tambah Minuman
            </button>
            {isPopupOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h2 className="text-lg font-bold mb-2">{isEditing ? "Edit Minuman" : "Tambah Minuman"}</h2>
                  <form onSubmit={isEditing ? handleUpdateMinuman : handleAddMinuman} className='space-y-1 flex'>
                  <div className="relative w-full mr-5">
                      {/* Input File (Hidden) */}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="fileUpload"
                      />

                      {/* Label sebagai tombol Upload */}
                      <label
                        htmlFor="fileUpload"
                        className={`w-full h-48 flex flex-col items-center justify-center border-2 border-dashed rounded-xl cursor-pointer ${selectedImage ? "border-gray-400" : "border-gray-400 hover:border-gray-500 hover:text-gray-500"
                          }`}
                      >
                        {/* Jika ada gambar, tampilkan */}
                        {selectedImage ? (
                          <div className="relative w-full h-full">
                            <img src={selectedImage} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                            {/* Tombol hapus gambar */}
                            <button
                              onClick={() => setSelectedImage(null)}
                              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                            >
                              ✖
                            </button>
                          </div>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-plus-lg text-gray-400" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 8 1" />
                            </svg>
                            <span className="mt-2 text-lg text-gray-400">Tambah Gambar</span>
                          </>
                        )}
                      </label>
                    </div>
                    <div className='block'>
                    <label className="text-txtnv font-mnu text-md font-thin">Nama Produk</label>
                    <input type="text" placeholder='' value={newMinuman.name} onChange={(e) => setNewMinuman({ ...newMinuman, name: e.target.value })} className='w-full p-2 border rounded-xl bg-gray-200' required />
                    <div className="relative space-y-1">
                      <label className="text-txtnv pb-3 font-mnu text-md font-thin">Harga</label>
                      <input
                        type="text"
                        value={newMinuman.description ? `Rp ${newMinuman.description}` : ''}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, ''); // Hanya angka
                          setNewMinuman({ ...newMinuman, description: value });
                        }}
                        placeholder="Rp 0"
                        className='w-full p-2 border rounded-xl bg-gray-200'
                        required
                      />
                    </div>
                    <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded-full mt-5'>{isEditing ? "Update" : "Tambah"}</button>
                    <button
                      type='button'
                      onClick={() => {
                        setIsPopupOpen(false);
                        setIsEditing(false);
                        setNewMinuman({ name: '', description: '', link: '' });
                        setCurrentMinumanId(null);
                        setSelectedImage(null);
                      }}
                      className='px-4 py-2 bg-gray-500 text-white rounded-full ml-2'
                    >
                      Batal
                    </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <div className='mt-8'>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {minuman.map(item => (
                  <li key={item.id} className='flex items-center bg-white rounded-xl shadow-md overflow-hidden'>
                    {item.link && (
                      <img src={item.link} alt={item.name} className="w-40 h-40 object-cover rounded-l-xl" />
                    )}
                    <div className="flex flex-col justify-between flex-1 p-3">
                      <span className="text-gray-700 font-medium truncate bg-gray-300 rounded-xl font-mnu text-2xl p-1 pl-3">{item.name}</span>
                      <span className="text-gray-700 font-normal bg-gray-300 rounded-xl font-mnu text-2xl p-1 pl-3 mt-2"> {item.description ? `Rp ${item.description}` : ''}</span>
                    </div>
                    <div className="flex flex-col items-center pr-3 gap-2">
                      <button onClick={() => startEditingMinuman(item)} className='text-gray-500 hover:text-yellow-500'>
                        <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                      </button>
                      <button onClick={() => handleDeleteMinuman(item.id)} className='text-red-500 hover:text-red-700'>
                        <FontAwesomeIcon icon={faTrash} size="lg" />
                      </button>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    };

export default AdminDashboard;
