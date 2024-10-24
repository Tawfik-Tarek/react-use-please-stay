import React from 'react';
import { usePleaseStay } from './hooks/usePleaseStay';

function App() {
  usePleaseStay();
  return (
    <div className="App">
      <p>Everything is ok🤓</p>
    </div>
  );
}

export default App;
