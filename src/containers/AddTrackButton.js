import React, { useEffect , useState } from "react";

export default function AddTrackButton( {songData, setTracksList, trackList} ) {
    const [isAdded, setIsAdded] = useState(false);
    const temp = trackList || [];
    const inList = temp.some(track => track.id === songData.id);
    
    const addTrack = () => {
        setIsAdded(true);
        setTracksList(prevList => [...prevList, songData]);
        alert("Track added to your list!");
    }
    
    useEffect(() => {
        setIsAdded(false);
    }, [songData]);

    return (
        <div className="add-track-button">
        <button onClick={addTrack} disabled={isAdded || inList}>{isAdded ? 'Added' : 'Add Track'}</button> 
        </div>
    );
}