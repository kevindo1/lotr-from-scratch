import React from 'react';

export default function FilmsList({ films }) {
  return (
    <section className="films">
      {films.map((film) => (
        <div className="film" key={film.id}>
          <a href={film.wikiUrl}>{film.title}</a>
        </div>
      ))}
    </section>
  );
}
