import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import MovieInclude from './MovieInclude';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#ffd',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MovieDetails({ targetMovie, characters, planets }) {
  const classes = useStyles();

  //       {characters.map(character => (
  //         <span key={character.url}>{character.name}, </span>
  //       <span>
  //         {planets.map(planet => (
  //           <span key={planet.url}>{planet.name}, </span>
  //         ))}
  //       </span>

  return (
    <Fragment>
      {targetMovie.map(movie => (
        <Card key={movie.episode_id} className={classes.root}>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Director: </TableCell>
                  <TableCell>{movie.director}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Producer: </TableCell>
                  <TableCell>{movie.producer}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Release date: </TableCell>
                  <TableCell>{movie.release_date}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Typography variant="body2" component="p">
              {movie.opening_crawl}
            </Typography>
            <MovieInclude items={characters} titleName={'All characters'} />
            <MovieInclude items={planets} titleName={'All planets'} />
          </CardContent>
        </Card>
      ))}
    </Fragment>
  );
}
