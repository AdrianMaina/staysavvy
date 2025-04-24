// src/components/HotelList.jsx
import React from 'react';

import HotelCard from './HotelCard';

export default function HotelList({ hotels }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}