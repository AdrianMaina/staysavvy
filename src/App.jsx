import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from "./pages/Login";
import NavBar from './components/NavBar';
import HotelList from './components/HotelList';
import Signup from './components/Signup';
import { useAuth } from './contexts/AuthContext'; // optional if using auth
import HotelDetails from './pages/HotelDetails';


export default function App() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState('');

  const { user } = useAuth(); // optional if using auth

  useEffect(() => {
    fetch('http://localhost:3001/hotels')
      .then(res => res.json())
      .then(data => setHotels(data))
      .catch(err => console.error('Failed to fetch hotels:', err));
  }, []);

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(search.toLowerCase()) ||
    hotel.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="bg-blue-600 text-white p-8 rounded-lg mb-8 shadow-lg">
  <h1 className="text-4xl font-bold mb-2">Welcome to StaySavvy </h1>
  <p className="text-lg">Discover top-rated hotels across Kenya. Book your stay with ease and read real user reviews.</p>
</section>
                <input
                  type="text"
                  className="w-full p-4 border-2 border-blue-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Search hotels by name or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <HotelList hotels={filteredHotels} />
              </>
            }
          />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}
