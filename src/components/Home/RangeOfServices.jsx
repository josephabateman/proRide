import React from 'react';
import ProrideImg2 from '../../static/images/proride-kids-2.png'


function RangeOfServices() {
    const button5 = {
        backgroundColor: "#4e9af1"
    }

    return (
        <div id="range-of-services" class="home-tiles">
            <h1>View Our Range Of Services</h1>
            <a href="/" class="button4" style={button5}>Learn More</a>
            <img alt="range of services" src={ProrideImg2} />
        </div>
    )
}

export default RangeOfServices;