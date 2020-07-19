import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonWrap from '../Button/ButtonWrap';
import css from './Input.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      width: '200px',
    },
    '& .MuiFormLabel-root': {
      borderColor: '#EEDB00',
      fontFamily: 'Lato',
      color: '#eeda0085',
    },
    '& .MuiInputBase-input': {
      fontWeight: 300,
      color: '#EEDB00',
    },
    '& .Mui-focused': {
      color: '#EEDB00',
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#EEDB00',
    },
  },
}));

export default function Input({
  handleSubmit,
  placeholder,
  value,
  handleChange,
  toggleSortMovies,
}) {
  const classes = useStyles();

  return (
    <form
      className={css.formWrap}
      noValidate
      autoComplete="off"
      onClick={handleSubmit}
    >
      <TextField
        className={classes.root}
        id="outlined-basic"
        variant="outlined"
        value={value}
        autoFocus
        label={placeholder}
        onChange={handleChange}
        // type="search"
      />
      <ButtonWrap name={'Sort'} toggleSortMovies={toggleSortMovies} />
    </form>
  );
}
