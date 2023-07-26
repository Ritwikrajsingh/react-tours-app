import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import Tours from '../Tours';

const API_URL = 'https://course-api.com/react-tours-project';

export default function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const removeTour = tourID => setTours(tours.filter(tour => tour.id !== tourID))

  const fetchTours = async () => {
    await fetch(API_URL)
      .then(data => data.json())
      .then(data => {
        setTours(data);
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) return <Loading />

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}