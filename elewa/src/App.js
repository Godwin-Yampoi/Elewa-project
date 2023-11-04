import React from 'react';
import Home from './Pages/Home';
import Invest from './Pages/Invest';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ElewaMission from './Pages/ElewaMission';

/**
 * App Component
 * The main application component that sets up the routing and renders different pages.
 */
function App() {
  return (
    <div>
      {/* Initialize the BrowserRouter for routing */}
      <BrowserRouter>
        {/* Render the navigation bar */}
        <Navbar />

        {/* Define the routes and their corresponding components */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />

          {/* Route for the Invest page */}
          <Route path="/Invest" element={<Invest />} />

          {/* Route for the About Us page (ElewaMission with category "About Us") */}
          <Route path='/mens' element={<ElewaMission category="About Us" />} />

          {/* Route for the Social Impact page (ElewaMission with category "Social Impact") */}
          <Route path='/womens' element={<ElewaMission category="Social Impact" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
