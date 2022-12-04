import React from 'react';
import './App.css';
import songDetails from "./components/Main-components/Database/song-details";
import SongLibraryHome from "./components/Main-components/Song-library-home";
import Song from "./components/Main-components/Song-card";

function createSong(detail) {
  return (
      <Song
          key={detail.id}
          img={detail.img}
          title={detail.title}
          artist={detail.artist}
      />   
  
  );
}
function App() {
  return (
   <div> 
    <div className="background1">
      <div className="heading1">Find The Perfect Real Estate Agent</div>
      <div className="text1">Make your search and sale easier and faster by connecting with one of our<br></br> expert local agent in your neighborhood
   
Search Agents</div>
      <input className="searchbar"></input>
      <button className="searchagents">Search Agents</button>
 </div>
    <div>
    <div className="heading2">Toronto’s Top Rated Agents </div> 
    <div className="row-posters">{songDetails.map(detail =>
           <SongLibraryHome
            key={detail.id}
            img={detail.img}
            title={detail.title}
            artist={detail.artist} />  )}</div>
</div>

</div>
  );
}

export default App;
