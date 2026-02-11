import React, { useState, useEffect } from "react";

export default function Track({ songData }) {
    const url = `https://open.spotify.com/embed/track/${songData ? songData.id : ''}`;

    return (
        <div className="track">
            <iframe
                src={songData ? url : null}
                width="300"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="Spotify Player"
            >
            </iframe>
        </div>
    );
}