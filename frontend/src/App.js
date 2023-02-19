
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Allroute from './route/Allroute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroute />
      <Footer/>
    </div>
  );
}

export default App;
