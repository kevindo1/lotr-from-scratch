import React from 'react';

export default function Controls({ query, setQuery, races, setRaces }) {
  // const handleClick = (e) => {
  //   setRaces(e.target.value);
  // };
  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search Name"
        label="Search Name"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input> */}
      <select value={races} onChange={(e) => setRaces(e.target.value)}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
      {/* <button onClick={handleClick}>Search</button> */}
    </div>
  );
}
