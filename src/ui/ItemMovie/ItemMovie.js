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
      width: 'fit-content',
      margin: '0 auto',
      fontSize: '18px',
      lineHeight: '2',
      fontFamily: 'PollerOne',
    },
  },
}));

export default function ItemMovie({ name, id, handleOpenItem }) {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <Link href="#" id={id} onClick={handleOpenItem}>
        {name}
      </Link>
    </Typography>
  );
}
