import React from "react";

export default function RemoveTrackButton( {songData, setTracksList} ) {
    return(
        <div className="remove-track-button">
            <button onClick={() => setTracksList(prevList => prevList.filter(track => track.id !== songData.id))}>Remove Track</button> 
        </div>
    );
}
    