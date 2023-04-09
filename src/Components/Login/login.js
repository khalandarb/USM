import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import './login.css';

const Login = () => {
  return (
    <div>
      
      <div className="wrapper fadeInDown">
  <div id="formContent">
    <div className="fadeIn first">
      <h3><p>Unified Security Master</p></h3>
    </div>
    
    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
      <a href='/admin'>
      <input type="button" className="fadeIn fourth" defaultValue="Log In" /></a>
    </form>
    
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>
  </div>
</div>
<Footer></Footer>
    </div>
  )
}

export default Login