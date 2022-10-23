
import './App.css';
import BlogCard from './components/BlogCard';
import Navbar from './components/Navbar';
import Allroute from './route/Allroute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroute />
      <BlogCard />
    </div>
  );
}

export default App;
