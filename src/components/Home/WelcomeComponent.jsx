import React from 'react';
import ProrideImg1 from '../../static/images/proride-kids-1.png'

function Welcome() {
    return (
        <div id="welcome" class="home-tiles">
            <h1>ProRide Coaching</h1>
            <h3>Making cycling in school fun</h3>
            <img alt="phil bateman coaching in schools" src={ProrideImg1} />
        </div>
    )
}

export default Welcome;