import * as React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function Video(props) {
  return (
    <React.Fragment>
      <Title>{props.course}</Title>
      <Typography component="p" variant="h5">
        {props.title}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Sobre: {props.description}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 2 }}>
        Tags: {props.tags}
      </Typography>
      <img src="https://images.vexels.com/media/users/3/153396/isolated/preview/3a868c6872c803c567bd867d226be1af-icone-plano-da-interface-do-player-de-video.png" alt="" 
                    style={{ width: '400px', height: '400px', marginLeft: '30%' }}
                       />
        <Link color="primary" to={`/classes/${props.course}/`}>
          Próxima aula
        </Link>
    </React.Fragment>
  );
}