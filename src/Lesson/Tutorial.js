import React from "react";
// const tutorial = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };


function Tutorial(props){ 
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let timeOfDay;
 
  if(hours < 12){ // 1..11
    timeOfDay = `${hours}: ${minutes} morning`
  } 
  else if(hours < 18){ //12 ... 24
    hours %= 12;
    timeOfDay = `${hours}: ${minutes} afternoon`
  } else{
    hours %= 12;
    timeOfDay = `${hours}: ${minutes} evening`;
  }

  return(
    <div>
        <h1>Time: {timeOfDay}</h1>
    </div>
  )
}
export default Tutorial