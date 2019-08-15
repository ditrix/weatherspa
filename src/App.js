import React from 'react';

import {Footer} from './component/Footer'
import {Header} from './component/Header'

import './style.css';

function App() {
  return (
    <div className="container">
      <header>  
        <Header />      
        <nav><h5>nav</h5></nav> 
      </header>
      
      <main>
        <h1>main</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
