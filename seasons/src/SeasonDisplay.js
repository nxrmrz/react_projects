import './SeasonDisplay.css';
import React from 'react';

//create a config object
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Brrr its chilly",
        iconName: "snowflake"
    }
};


//extract as much logic out of functional components as much as possible
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0? 'summer' : 'winter';
    }
    else {
        return lat < 0? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season] // grabs {text, iconName} for that season and stores it in another object A
 
    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/> 
        <h1>{text}</h1>  
        <i className={`icon-right massive ${iconName} icon`}/>
    </div>
    );
    
};

export default SeasonDisplay;