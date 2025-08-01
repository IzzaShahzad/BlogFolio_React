import React from 'react';

const SearchBar = ({ query, onChange }) => (
  <input
    type="text"
    placeholder="Search posts by title..."
    value={query}
    onChange={(e) => onChange(e.target.value)}
    style={{ padding: '0.5rem', width: '100%', maxWidth: '300px' }}
  />
);

export default SearchBar;
