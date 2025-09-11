import React, { useEffect, useState } from "react";
import { searchSongs } from "./util";

import SearchBar from "./containers/SearchBar";
import SearchResults from "./containers/SearchResults";
import TracksList from "./containers/Trackslist";

function App() {
  /*const [songData, setSongData] = useState(null);
  const [tracksList, setTracksList] = useState([]);
  const [url, setUrl] = useState("");
  

  useEffect(() => {
    const fetchData = async () => {
      const hurricane = await searchSongs("hurricane");
      console.log(hurricane);
      const trackData = hurricane.tracks.items[1].data;
      setSongData(trackData);
      const trackId = trackData.id;
      console.log(trackId);
      const trackStreamUrl = `https://open.spotify.com/track/${trackData.uri.split(':')[2]}`;
      console.log(trackStreamUrl);
      setUrl(`https://open.spotify.com/track/${trackId}`);
      console.log(`https://open.spotify.com/track/${trackId}`);
    };
    fetchData();
  }, []);*/
  
  
  const [tracksData, setTracksData] = useState([]);
  const [songData, setSongData] = useState(null);
  const [tracksList, setTracksList] = useState([]);

  return (
    <div className="App">
      <h1>Favolist</h1>
      <SearchBar setTracksData={setTracksData}/>
      <SearchResults tracksData={tracksData} setSongData={setSongData} setTracksList={setTracksList}/>
      <TracksList tracksList={tracksList} setTracksList={setTracksList} />
    </div>
  );
}

export default App;