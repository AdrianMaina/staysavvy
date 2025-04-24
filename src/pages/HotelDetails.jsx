import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { StarIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';


export default function HotelDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [hotel, setHotel] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  useEffect(() => {
    fetch(`http://localhost:3001/hotels/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Hotel not found');
        return res.json();
      })
      .then((data) => {
        setHotel(data);
        setReviews(data.reviews || []);
      })
      .catch((err) => console.error('Failed to fetch hotel details:', err));
  }, [id]);

  const handleSubmitReview = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      user: user?.email || 'Anonymous',
      comment,
      rating,
    };

    const updatedReviews = [...reviews, newReview];

    fetch(`http://localhost:3001/hotels/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reviews: updatedReviews }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setComment('');
        setRating(5);
      })
      .catch((err) => console.error('Error submitting review:', err));
  };

  if (!hotel) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
    <div className="overflow-hidden rounded-2xl mb-6">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  

      <h2 className="text-4xl font-extrabold text-blue-800 mb-4">{hotel.name}</h2>
      <p className="text-gray-600 mb-1 flex items-center gap-2">
  <MapPinIcon className="h-5 w-5 text-blue-500" />
  <strong>Location:</strong> {hotel.location}
</p>

<p className="text-gray-600 mb-1 flex items-center gap-2">
  <PhoneIcon className="h-5 w-5 text-green-500" />
  <strong>Phone:</strong> {hotel.phone}
</p>
<p className="relative bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md italic font-serif text-lg leading-relaxed mt-4 mb-6">
  <span className="absolute top-2 left-3 text-4xl text-blue-400 select-none">“</span>
  {hotel.description}
</p>



      {hotel.mapEmbedUrl && (
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-2">Map Location</h3>
    <iframe
      title="Hotel Location"
      src={hotel.mapEmbedUrl}
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded shadow-md"
    />
  </div>
)}

      {/* Review Form */}
      {hotel.bookingUrl && (
  <a
    href={hotel.bookingUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 mt-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
  >
    Book Now
  </a>
)}
      {user && (
        <form
          className="bg-gray-50 p-4 border rounded mb-6"
          onSubmit={handleSubmitReview}
        >
          <h3 className="text-xl font-semibold mb-2">Leave a Review</h3>
          <textarea
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            rows="3"
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <label className="block mb-2">
            Rating:
            <select
              className="ml-2 p-1 border rounded"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="mt-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Submit Review
          </button>
        </form>
      )}

      {/* Reviews */}
      <div>
        <h3 className="text-xl font-semibold mb-3">User Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>
        ) : (
          <ul className="space-y-4">
            {reviews.map((rev) => (
              <li key={rev.id} className="border p-3 rounded bg-gray-50">
                <p className="text-sm text-gray-700">
                  <strong>{rev.user}</strong> — Rating: {rev.rating}/5
                </p>
                <p className="text-gray-800">{rev.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
