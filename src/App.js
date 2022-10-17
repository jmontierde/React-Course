import './App.css';

import Intro from './Solo Projects/Intro';
import About from './Solo Projects/About'
import Interests from './Solo Projects/Interests';
import Footer from './Solo Projects/Footer';
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
      <Intro />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
