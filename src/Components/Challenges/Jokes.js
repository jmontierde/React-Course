import React from 'react'
function Jokes({setup, punchline,num}){ 
    return(
        <div>
            <h5>Jokes: {setup} </h5>
            <h5>Setup: {punchline} </h5>
            <h5>Num: {num} </h5>


        </div>
    )
}
export default Jokes