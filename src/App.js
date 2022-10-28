import './App.css';
import Jokes from './Components/Challenges/Jokes';

import Intro from './Components/Project 1/Intro'
import About from './Components/Project 1/About'
import Interests from './Components/Project 1/Interests'
import Footer from './Components/Project 1/Footer'
import Navbar from './Components/Project2/Navbar';
import Hero from './Components/Project2/Hero';
import Cards from './Components/Project2/Cards';
import Tutorial from './Lesson/Tutorial';

//Icons
 
// import Header from './Components/Header';
// import OrderedList from './Components/OrderedList';
// import Footer from './Components/Footer';
// import About from './Components/About';
function App() { // App.js is the parent Compenent wherein it will get all the other components
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
        <Hero 

        />
        <Cards
          img = "./card-img1.jpg"
          status = "5.0 USA"
          reviewCount = {6}
          title = "Do something fun"
          rate = "From $136 / person"
        />
        <Cards
          img = "./card-img2.jpg"
          status = "5.0 USA"
          reviewCount = {6}
          title = "Learn wedding photography"
          rate = "From $136 / person"
          price = {136}
        />
        <Cards
          img = "./card-img3.jpg"
          status = "5.0 USA"
          reviewCount = {6}
          title = "Group mountain bikers"
          rate = "From $136 / person"
          price = {136}
        />
      
      {/* <Tutorial /> */}
      {/* <Jokes
        setup = "A woman in labor suddenly shouted, “Shouldn't! Wouldn't! Couldn't! Didn't! Can't!”"
        punchline =  "“Don't worry,” said the doc. “Those are just contractions.”"
        num = {1}
      />
        <Jokes
        setup = "A bear walks into a bar and says, “Give me a whiskey and … cola.”"
        punchline =  "“Why the big pause?” asks the bartender. The bear shrugged. “I'm not sure; I was born with them.””"
      />
        <Jokes
        setup = "Did you hear about the actor who fell through the floorboards?"
        punchline =  "He was just going through a stage."
      />
        <Jokes
        setup = "Did you hear about the claustrophobic astronaut?"
        punchline =  "He just needed a little space."
      />
        <Jokes
        setup = "Why don't scientists trust atoms?"
        punchline =  "Because they make up everything."
      /> */}
    </div>
  );
}

export default App;
