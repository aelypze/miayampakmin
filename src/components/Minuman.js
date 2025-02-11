import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Sidebar2 from "../admin/Sidebar2";

const Minuman = () => {
    const [minuman, setMinuman] = useState([]);

    useEffect(() => {
        const fetchMinuman = async () => {
            const querySnapshot = await getDocs(collection(db, 'minuman'));
            setMinuman(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        };
        fetchMinuman();
    }, []);

    return (
        <section id="minuman" className="flex h-screen w-full bg-bckg">
            {/* Sidebar fixed di sebelah kiri */}
            <div className="w-64 h-screen fixed">
                <Sidebar2 />
            </div>
            {/* Konten dengan scroll */}
            <div className="ml-64 p-8 w-full overflow-y-auto h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {minuman.map((item) => (
                        <div key={item.id} className="p-4 rounded-lg">
                            <img src={item.link} alt={item.name} className="w-full h-40 object-cover rounded-2xl" />
                            <h3 className="text-xl mt-2 text-paper font-jdl grid grid-cols-2">
                                {item.name}
                            <p className="text-mknn font-mnu text-right">
                                {item.description ? `Rp ${item.description}` : ''}</p>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Minuman;
