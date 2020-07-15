import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
    '& .MuiFormLabel-root': {
      fontFamily: 'PollerOne',
    },
    '& .MuiInputBase-input': {
      fontFamily: 'PollerOne',
    },
    '& .Mui-focused': {
      color: '#EEDB00',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#EEDB00',
    },
  },
}));

export default function Input({
  handleSubmit,
  placeholder,
  value,
  handleChange,
}) {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onClick={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={value}
        autoFocus
        label={placeholder}
        onChange={handleChange}
        // type="search"
      />
    </form>
  );
}
