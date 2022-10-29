import './App.css';
import Jokes from './Components/Challenges/Jokes';
import JokesData from './Components/Challenges/JokesData';
import Intro from './Components/Project 1/Intro'
import About from './Components/Project 1/About'
import Interests from './Components/Project 1/Interests'
import Footer from './Components/Project 1/Footer'
//Project 2
import Navbar from './Components/Project2/Navbar';
import Hero from './Components/Project2/Hero';
import data from './Components/Project2/data';
//
import Cards from './Components/Project2/Cards';
import Tutorial from './Lesson/Tutorial';
import Map from './Lesson/Map';

//Icons
 
// import Header from './Components/Header';
// import OrderedList from './Components/OrderedList';
// import Footer from './Components/Footer';
// import About from './Components/About';
function App() { // App.js is the parent Compenent wherein it will get all the other components
  // const jokesElement = JokesData.map(elem => { 
  //   return <Jokes setup={elem.setup} punchline={elem.punchline}/> //Pinasok natin ang setup at punchline sa loob ng jokes upang ma gamit ang props
  // })
  // Map data
  const dataElement = data.map(dataElem => { 
    return <Cards 
      key = {dataElem.id}
      // dataElem = {dataElem}
      {...dataElem} // Spread Operator, it's the same under this code and You only use props to get the data
      // title = {dataElem.title}
      // rating = {dataElem.stats.rating}
      // description = {dataElem.description}
      // price = {dataElem.price}
      // img = {dataElem.img}
      // stats = {dataElem.stats}
      // location = {dataElem.location}
      // openSpots = {dataElem.openSpots}
      
    />
  
  })
  

  return (
    <div className="App">
      {/* <Header/>
      <About />
      <OrderedList />
      <Footer /> */}
      {/* <div className='Project-1'>
        <Intro />
        <About />
        <Interests />
        <Footer />
      </div> */}
        <Navbar />
        <Hero />   
        {dataElement}
        {dataElement}
        {/* <Map /> */}
      {/* <Tutorial /> */}
     
      {/* {jokesElement}  */}
   

    </div>
  );
}

export default App;
