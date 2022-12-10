import React from "react";

const flick = () => {
    return (
        <div className="flick">
            <div className="flick-filters">
                <button>Filters</button>
            </div>
            <div className="flick-center">
                <h1>Know your next flick?</h1>
                <button className="red-btn">Flick!</button>
                <h2>3 free Flicks remaining</h2> 

                <div className="flick-subscribe">
                    <h3>Subscribe for unlimited Flicks!</h3>
                </div>
            </div>
        </div>
    )
};

export default flick;