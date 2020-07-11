import React from 'react';
import * as mockData from './components/Tabs/mockData/mockArticles.json'
import Tabs from './components/Tabs/Tabs';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>BFI Articles API</h1>
      </header>
      <div><Tabs data={mockData.default}/></div>
    </div>
  );
}

export default App;
