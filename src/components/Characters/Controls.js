import React from 'react';

export default function Controls({ query, setQuery, race, setRace }) {
  return (
    <div>
      <input type="text" placeholder="Search Name" label="Search Name" value={query}></input>
    </div>
  );
}
