import React from 'react';
import Main from './components/main.js';
import './App.css';
import { Link } from 'react-router-dom';
import home from './assets/house-svgrepo-com.svg';
import logoReact from './logo.svg';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          This is the currencies convertion service!
        <Link to='/'>
            <div className='homeButton'>
              <img className='home' src={home} alt='Home' />
            </div>

          </Link>
        </div>
      </header>
      <div className="App-body">
        <Main />
      </div>
      <footer className="App-footer">
        <div>Powered by React JS</div>
        <img src={logoReact} className='logo' alt='' />
      </footer>
      
    </div>
  );
}

export default App;
