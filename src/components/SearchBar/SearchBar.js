import React, { Fragment } from 'react';
import ButtonWrap from '../../ui/Button/ButtonWrap';
import Input from '../../ui/Input/Input';
// import css from './SearchBar.module.css';

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
      />
      <ButtonWrap name={'Sort'} toggleSortMovies={toggleSortMovies} />
    </Fragment>
  );
}

export default SearchBar;
