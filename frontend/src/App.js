import "./App.css";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

import Navbar from "./components/Navbar";
import Allroute from "./route/Allroute";

function App() {
  return (
    <div className="App">
      <MobileNav/>
      <Navbar />
      <Allroute />
      <Footer />
    </div>
  );
}

export default App;
