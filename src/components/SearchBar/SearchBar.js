import React from 'react';
// import css from './SearchBar.module.css';

function SearchBar({ handleChange, handleSubmit, searchQuery }) {
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={searchQuery} />
    </form>
  );
}

export default SearchBar;
