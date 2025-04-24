// src/components/HotelCard.jsx
import { Link } from 'react-router-dom';
import { StarIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{hotel.name}</h2>

        <p className="text-gray-600 flex items-center gap-2 mt-1">
          <MapPinIcon className="h-5 w-5 text-blue-500" />
          {hotel.location}
        </p>

        <p className="text-yellow-500 flex items-center gap-2 mt-1">
          <StarIcon className="h-5 w-5" />
          {hotel.rating} / 5
        </p>

        <Link
          to={`/hotels/${hotel.id}`}
          className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-full hover:opacity-90 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
