import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Answered from './components/Answered';
import Reputation from './components/Reputation';
import Minview from './components/Minview';
import Current from './components/Current';
import Vuelosconaeropuertos from './components/Vuelosconaeropuertos';
import Aerolineamasvuelos from './components/Aerolineamasvuelos';
import Diasconmayorvuelos from './components/Diasconmayorvuelos';
import Masdedosvuelospordia from './components/Masdedosvuelospordia';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Answered />}></Route>
    </Routes>
    <Routes>
      <Route path='/' element={<Reputation />}></Route>
    </Routes>
    <Routes>
      <Route path='/' element={<Minview />}></Route>
    </Routes>
    <Routes>
      <Route path='/' element={<Current />}></Route>
    </Routes>
    <Routes>
      <Route path='/' element={<Vuelosconaeropuertos />}></Route>
    </Routes>
    <Routes>
      <Route path='/' element={<Aerolineamasvuelos />}></Route>
    </Routes>
    <Routes>
      <Route path='/' element={<Diasconmayorvuelos />}></Route>
    </Routes>
    <Routes>
      <Route path='/' element={<Masdedosvuelospordia />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
