import './App.css';
import Header from './Components/Header';
import OrderedList from './Components/OrderedList';
import Footer from './Components/Footer';
function App() { // App.js is the parent Compenent wherein it will get all the other components
  return (
    <div className="App">
      <Header/>
      <OrderedList />
      <Footer />
    </div>
  );
}

export default App;
