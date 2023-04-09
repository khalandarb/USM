import logo from './logo.svg';
import './assets/css/style.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/home.js';
import Links from './Components/Header/links';
import Securities from './Components/Securities/securities';
import Login from './Components/Login/login';
import Admin from './Components/Admin/admin';

function App() {  
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/securities' element={<Securities></Securities>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
