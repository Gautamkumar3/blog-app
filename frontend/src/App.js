import "./App.css";
import AdminTable from "./components/admin/AdminTable";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

import Navbar from "./components/Navbar";
import Allroute from "./route/Allroute";

function App() {
  return (
    <div className="App">
      {/* <MobileNav/>
      <Navbar />
      <Allroute />
      <Footer /> */}
      <AdminTable />
    </div>
  );
}

export default App;
