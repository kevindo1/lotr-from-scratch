import React, { useEffect, useState } from 'react';
import CharactersList from '../../../src/components/Characters/CharactersList';
import Controls from '../../components/Characters/Controls';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [races, setRaces] = useState('All');

  useEffect(() => {
    const getCharacters = async () => {
      const resp = await fetchCharacters('All', races);
      setCharacters(resp);
    };
    getCharacters();
  }, [races]);

  return (
    <div>
      <h1>Characters</h1>
      <Controls query={query} setQuery={setQuery} races={races} setRaces={setRaces} />
      <CharactersList
        characters={characters}
        setCharacters={setCharacters}
        query={query}
        setQuery={setQuery}
        races={races}
        setRaces={setRaces}
      />
    </div>
  );
}
