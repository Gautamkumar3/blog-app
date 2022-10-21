
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Allroute from './route/Allroute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroute />
    </div>
  );
}

export default App;
