import React from 'react';

export default function Controls({
  query,
  setQuery,
  races,
  setRace,
  selectedRace,
  setSelectedRace,
}) {
  const handleClick = (e) => {
    setRace(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search Name"
        label="Search Name"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
      <select value={selectedRace} onChange={(e) => setSelectedRace(e.target.value)}>
        <option value="All">All</option>
        {races.map((race) => (
          <option key={race} value={race}>
            {race}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
