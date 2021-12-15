import React, { useState, useEffect } from 'react';
import FilmsList from '../../../src/components/Films/FilmsList';
import fetchFilms from '../../../src/components/Films/FilmsList';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const resp = await fetchFilms();
      setCharacters(resp);
    };
    getCharacters();
  }, []);

  return (
    <div>
      <FilmsList characters={characters} setCharacters={setCharacters} />
    </div>
  );
}
