import React from 'react'
function Jokes(props){ 
 
   // Instead of calling Jokes component in App.js we call the map 
   
    return(
        <div>
            <h5>Jokes: {props.jokes} </h5>
            <h5>Setup: {props.punchline} </h5>

        </div>
    )
}
export default Jokes