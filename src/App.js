// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Admin from "./admin/Admin";
import Makanan from './components/Makanan';
import Minuman from './components/Minuman';
import AdminDashboard from './admin/AdminDashboard';
import AdminDashboard2 from './admin/AdminDashboard2';
import About from "./components/About";
import Lokasi from "./components/Lokasi";
import Detailabt from "./components/Detailabt";
import Footer from "./components/Footer";

function Layout() {
  const location = useLocation();
  
  // daftar halaman yang menampilkan navbar
  const pagesWithNavbar = ["/makanan", "/minuman", "/", "/detailabout"];
  
  const showNavbar = pagesWithNavbar.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/makanan" element={<Makanan />} />
        <Route path="/minuman" element={<Minuman />} />
        <Route path="/adminlogin" element={<Admin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin2" element={<AdminDashboard2 />} />
        <Route path="/" element={<div><Home /><Menu /><About /><Lokasi /><Contact /><Footer /></div>} />
         <Route path="/detailabout" element={
           <>
           <Detailabt />
           <Footer />
           </>
         } />
        
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<div><Home /><Menu /><About /><Lokasi /><Contact /><Footer /></div>} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/detailabout" element={
//           <>
//           <Detailabt />
//           <Footer />
//           </>
//         } />
        
//       </Routes>
//     </Router>
//   );
// };

// export default App;