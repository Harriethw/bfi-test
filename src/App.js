import React from 'react';
import Tabs from './components/Tabs/Tabs';
import {useArticleData} from './hooks/useArticleData.js';

function App() {

  const articles = useArticleData('review').concat(useArticleData('video'));

  return (
    <div className="App">
      <header className="App-header">
        <h1>BFI Articles API</h1>
      </header>
      <div><Tabs data={articles}/></div>
    </div>
  );
}

export default App;
