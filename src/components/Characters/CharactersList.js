import React from 'react';

export default function CharactersList({ characters }) {
  return (
    <section className="characters">
      {characters.map((character) => (
        <div className="character" key={character.name}>
          <a href={character.wikiUrl}>{character.name}</a>
          <p>{character.birth}</p>
          <p>{character.death}</p>
        </div>
      ))}
    </section>
  );
}
