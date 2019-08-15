import React from 'react';


import {Footer} from './component/Footer'
import {Header} from './component/Header'
import {Spinner} from './component/Spinner'

import circles from './circles.svg'

import './style.css';

function App() {
  return (
    <div className="container">
      <header> 
        <Header /> 
      </header>
      <nav><h5>nav</h5></nav> 
      <main>
        <Spinner />        

        <h1>main</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
