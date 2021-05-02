import React from 'react';

function WatchOurVideo() {
    return (
        <div id="video-container" className="flex-split home-tiles">
            <h3>Watch Our Video</h3>
            <div class="video-container">
                <iframe class="video" src="https://www.youtube.com/embed/KPvxQjljIgo" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default WatchOurVideo;