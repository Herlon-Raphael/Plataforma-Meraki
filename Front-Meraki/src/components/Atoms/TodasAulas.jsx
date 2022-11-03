import * as React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function TodasAulas(props) {

  return (
    <React.Fragment>
      <Title>{props.course}</Title>
      <Typography component="p" variant="h5">
        {props.title}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Sobre: {props.description}
      </Typography>
      <img src="" alt="" />
        <Link color="primary" to={`/classes/${props.course}/${props.number}`}>
          Assistir aula
        </Link>
    </React.Fragment>
  );
}