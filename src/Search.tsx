import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { pokemonList } from './pokemonList';

const options = {
  keys: ['name'],
};

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchOption, setSearchOption] = useState('beginsWith');

  const fuse = new Fuse(pokemonList, options);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    let searchResults = [];

    if (searchOption === 'beginsWith') {
      searchResults = fuse.search(`^${e.target.value}`);
    } else if (searchOption === 'contains') {
      searchResults = fuse.search(e.target.value);
    }

    setResults(searchResults.map((result) => result.item));
  };

  const handleSearchOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchOption(e.target.value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={search} />
      <div>
        <label>
          <input
            type="radio"
            value="beginsWith"
            checked={searchOption === 'beginsWith'}
            onChange={handleSearchOptionChange}
          />
          Begins With
        </label>
        <label>
          <input
            type="radio"
            value="contains"
            checked={searchOption === 'contains'}
            onChange={handleSearchOptionChange}
          />
          Contains
        </label>
      </div>
      <ul>
        {results.map((pokemon) => (
          <li key={pokemon}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
