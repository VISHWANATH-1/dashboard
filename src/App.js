import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Settings } from './Component/Pages/Settings';
import { Home } from './Component/Pages/Home';
import { About } from './Component/Pages/About';
function App() {
  return (
    <>
       <BrowserRouter>
            <Routes>
             
              <Route path='/' exact element={<Home/>} />
              <Route path='about' exact element={<About />} />
              <Route path='settings' exact element={<Settings />} />
            </Routes>
       </BrowserRouter>
    
    </>
  );
}

export default App;
