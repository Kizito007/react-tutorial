import React from "react";

function Datte() {
    const date = new Date();
    const hours = date.getHours()
    const styles = {
        // color: "#ff8c00", 
        // backgroundColor: "blue",
        fontSize: "24px"
    }

    let timeOfDay ;

    if (hours < 12){
        timeOfDay = "morning"
        styles.color = "green"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "red"
    } else {
        timeOfDay = "night"
        styles.color ="blue"
    }
    
    return(
    <h1 style={styles}>Good {timeOfDay}</h1>
    )
}

export default Datte;