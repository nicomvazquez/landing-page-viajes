import React from "react";

import Navbar from "./components/Navbar.jsx";

import Homepage from "./pages/Homepage.jsx";
import Aboutpage from './pages/Aboutpage.jsx'
import Infopage from './pages/Infopage.jsx'
import Testimoniopage from './pages/Testimoniopage.jsx'
import Foother from './pages/Foother.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Infopage />
      <Testimoniopage />
      <Foother />
    </div>
  );
}

export default App;
