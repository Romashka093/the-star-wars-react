import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    '& .MuiButton-containedPrimary': {
      color: '#151515',
      backgroundColor: '#FFE81F',
      fontFamily: 'PollerOne',
    },
    '& .MuiButton-root': {
      padding: '16px',
    },
  },
});

export default function ButtonWrap({ name, toggleSortMovies }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        href="#contained-buttons"
        onClick={toggleSortMovies}
      >
        {name}
      </Button>
    </div>
  );
}
