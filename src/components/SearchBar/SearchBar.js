import React, { Fragment } from 'react';
import Input from '../../ui/Input/Input';

function SearchBar({
  handleChange,
  handleSubmit,
  searchQuery,
  toggleSortMovies,
}) {
  return (
    <Fragment>
      <Input
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={searchQuery}
        placeholder={'Enter movie name'}
        toggleSortMovies={toggleSortMovies}
      />
    </Fragment>
  );
}

export default SearchBar;
