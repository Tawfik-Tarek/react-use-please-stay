import React from 'react';
import { usePleaseStay } from 'react-use-please-stay';

function App() {
  usePleaseStay({
    titles: ['👋🏼', '👋🏼👋🏼', '👋🏼👋🏼👋🏼'],
  });
  return (
    <div className="App">
      <p>Everything is ok🤓</p>
    </div>
  );
}

export default App;
