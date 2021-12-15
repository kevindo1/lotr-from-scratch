import React, { useState, useEffect } from 'react';
import FilmsList from '../../../src/components/Films/FilmsList';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const resp = await fetchFilms();
      setFilms(resp);
    };
    getFilms();
  }, []);
  return (
    <div>
      <h1>Films</h1>
      <FilmsList films={films} setFilms={setFilms} />
    </div>
  );
}
