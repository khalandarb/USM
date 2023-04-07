import logo from './logo.svg';
import './assets/css/style.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/home.js';
import Links from './Components/Header/links';
import Securities from './Components/Securities/securities';

function App() {  
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/securities' element={<Securities></Securities>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
