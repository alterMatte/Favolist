import React, { useState } from "react";
import Track from "./Track";
import RemoveTrackButton from "./RemoveTrackButton";

export default function TracksList ( {tracksList, setTracksList} ) {

    const displayTracks = (tracksList) => {
        if (tracksList.length === 0) {
            return <p>No tracks added yet.</p>;
        }else {
            return tracksList.map((track, index) => (
                <div key={index} className="track-item">
                    <Track songData={track} />
                    <RemoveTrackButton songData={track} setTracksList={setTracksList} />
                </div>
            ));
        }
    }
    
    return (
        <div className="tracks-list">
            <h3>Tracks List</h3>
            {displayTracks(tracksList)}
        </div>
    );
}