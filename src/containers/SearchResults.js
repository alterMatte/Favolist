import React from "react";
import Track from "./Track";
import AddTrackButton from "./AddTrackButton";

export default function SearchResults( {setSongData, setTracksList, tracksData} ) {

    const displaySearchResults = () => {
        if (tracksData.length === 0) {
            return <p>No results found</p>;
        } else {
            return tracksData.map((item, index) => (
                <div key={index} onClick={() => setSongData(item.data)}>
                    <Track songData={item.data} />
                    <AddTrackButton songData={item.data} setTracksList={setTracksList}/>
                </div>
            ));
        }
    };

    const songData = tracksData.length > 0 ? tracksData[0].data : null;

    return (
        <div className="search-results">
            <h3>Search Results</h3>
            {displaySearchResults()}
        </div>
    );
}