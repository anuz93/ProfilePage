
import React from 'react';
import {Card, CardMedia, CssBaseline, CardContent, Typography} from '@mui/material';
import { Container } from '@mui/system';


function Movie(props) {
  return (
    <div>
      <CssBaseline />
      <Card sx={{ width: 245, ml: '10px', mr: '10px'}}>
     
        <CardMedia
          component="img"
          height="140"
          image={props.imageLink}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.movieName}
          </Typography>
        </CardContent>
     
    </Card>
    
                

    </div>
  );
}

export default Movie;