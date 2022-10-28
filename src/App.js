import './App.css';

import Intro from './Components/Project 1/Intro'
import About from './Components/Project 1/About'
import Interests from './Components/Project 1/Interests'
import Footer from './Components/Project 1/Footer'
import Navbar from './Components/Project2/Navbar';
import Hero from './Components/Project2/Hero';
import Cards from './Components/Project2/Cards';
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
      <Hero />
      <Cards/>
      
    </div>
  );
}

export default App;
