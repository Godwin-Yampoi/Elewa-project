import  Home from './Pages/Home';
import Invest from './Pages/Invest';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ElewaMission from './Pages/ElewaMission';



function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/Invest" element={<Invest/>}/>
            <Route path='/mens' element={<ElewaMission category="About Us"/>}/>
            <Route path='/womens' element={<ElewaMission category="Social Impact"/>}/>
          
          
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;