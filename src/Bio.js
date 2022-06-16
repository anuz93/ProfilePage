
import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';



function Bio() {
    return (
        <Card sx={{ width: 975, height: 300, ml:'200px', ml:'10px', mt:'10px' }}>
          <CardContent>
            <Typography variant="h2" component="div">
              Biography
            </Typography>
            <Typography variant="body2">
            An actor and producer known as much for his versatility as he is for his handsome face, Golden Globe-winner Brad Pitt's most widely recognized role may be Tyler Durden in Fight Club (1999). However, his portrayals of Billy Beane in Moneyball (2011), and Rusty Ryan in the remake of Ocean's Eleven (2001) and its sequels, also loom large in his filmography.<br>
            </br>
    
    Pitt was born William Bradley Pitt on December 18th, 1963, in Shawnee, Oklahoma, and was raised in Springfield, Missouri. He is the son of Jane Etta (Hillhouse), a school counselor, and William Alvin Pitt, a truck company manager. He has a younger brother, Douglas (Doug) Pitt, and a younger sister, Julie Neal Pitt. At Kickapoo High School, Pitt was involved in sports, debating, student government and school musicals. Pitt attended the University of Missouri, where he majored in journalism with a focus on advertising. He occasionally acted in fraternity shows. He left college two credits short of graduating to move to California. Before he became successful at acting, Pitt supported himself by driving strippers in limos, moving refrigerators and dressing as a giant chicken while working for "el Pollo Loco".
            </Typography>
          </CardContent>
        </Card>
      );
}

export default Bio;

