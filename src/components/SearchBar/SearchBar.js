import React from 'react';
// import css from './SearchBar.module.css';

function SearchBar({
  handleChange,
  handleSubmit,
  searchQuery,
  toggleSortMovies,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        autoComplete="on"
        onChange={handleChange}
        value={searchQuery}
        autoFocus
      />
      <button onClick={toggleSortMovies}>Sort</button>
    </form>
  );
}

export default SearchBar;
