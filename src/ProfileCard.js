
import React from 'react';
import {Card, CardMedia, CssBaseline, CardContent, Typography} from '@mui/material';
import { Container } from '@mui/system';


function ProfileCard() {
  return (
    <div>
      <CssBaseline />
      <Card sx={{ width: 345, height: 600, marginTop: '10px', marginLeft: '10px', mb: '10px' }}>
     
        <CardMedia
          component="img"
          height="440"
          image="https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg"
          alt="Brad"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Brad Pitt
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Birth place: Chicago, Illinois
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date of Birth: 19 Oct 1962
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Spouse(s): Jennifer Aniston, Angelina Jolie
          </Typography>
        </CardContent>
     
    </Card>
    
                

    </div>
  );
}

export default ProfileCard;