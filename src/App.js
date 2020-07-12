import React from 'react';
import logo from './logo.png';
import Tabs from './components/Tabs/Tabs';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>BFI Popular Articles</h1>
      </header>
      <div><Tabs /></div>
    </div>
  );
}

export default App;
