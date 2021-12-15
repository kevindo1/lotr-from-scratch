import React, { useEffect, useState } from 'react';
import CharactersList from '../../../src/components/Characters/CharactersList';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getCharacters = async () => {
      const resp = await fetchCharacters('All');
      setCharacters(resp);
    };
    getCharacters();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <Controls query={query} setQuery={setQuery} />
      <CharactersList
        characters={characters}
        setCharacters={setCharacters}
        query={query}
        setQuery={setQuery}
      />
    </div>
  );
}
