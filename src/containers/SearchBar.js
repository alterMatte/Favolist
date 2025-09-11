import React, { useState, useEffect } from "react";
import { searchSongs } from "../util";

export default function SearchBar( {setTracksData} ) {

    const [searchTerm, setSearchTerm] = useState("");
    const onChangeHandler = (event) => {
        setSearchTerm(event.target.value);
    }

    const search = async () => {
        const results = await searchSongs(searchTerm);
        setTracksData(results.tracks.items);
        alert (results.tracks.items.length + " results found!");
    }

    const onKeyDownHandler = (event) => {
        if (event.key === 'Enter') {
            search();
        }
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." onKeyDown={onKeyDownHandler} onChange={onChangeHandler} />
            <button onClick={search}>Search</button>
        </div>
    );
}