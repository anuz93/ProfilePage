
import React from 'react';
import Bio from './Bio';
import ProfileCard from './ProfileCard';
import Movie from './Movie';


function App() {
  return (  
    <div style={{display:'flex', flexWrap: 'wrap', width: '1400px', height:'700px',justifyContent:'center' }}>          
      <ProfileCard/>
      <Bio/>
      <Movie movieName={"Fight Club (2000)"} imageLink={"https://lumiere-a.akamaihd.net/v1/images/image_174b2bb6.jpeg"}/>
      <Movie movieName={"Moneyball (2011)"} imageLink={"https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Moneyball_Poster.jpg/220px-Moneyball_Poster.jpg"}/>
      <Movie movieName={"Ad Astra (2019)"} imageLink={"https://www.indiewire.com/wp-content/uploads/2019/08/https___hypebeast.com_image_2019_07_brad-pitt-ad-astra-second-trailer-00.jpg"}/>
    </div>
  );
}

export default App;
