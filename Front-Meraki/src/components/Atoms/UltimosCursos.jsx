import * as React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function UltimosCursos(props) {
  return (
    <React.Fragment>
      <Title>Últimos cursos</Title>
      <Typography component="p" variant="h5">
        {props.course}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Status: {props.status}
      </Typography>
      <img src="" alt="" />
        <Link color="primary" to={`/classes/${props.course}`}>
          Acessar curso
        </Link>
    </React.Fragment>
  );
}