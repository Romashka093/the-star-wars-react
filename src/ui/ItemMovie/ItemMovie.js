/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(12),
    },
    '& .MuiTypography-colorPrimary': {
      color: '#EEDB00',
    },
  },
}));

export default function ItemMovie({ name, id, handleOpenItem }) {
  const classes = useStyles();

  return (
    <Typography className={classes.root} onClick={handleOpenItem}>
      <Link href="#" id={id}>
        {name}
      </Link>
    </Typography>
  );
}
