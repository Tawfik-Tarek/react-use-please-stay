import React from 'react';
import { usePleaseStay } from './hooks/usePleaseStay';

function App() {
  usePleaseStay(["any" , "array" , "of" , "titles"]);
  return (
    <div className="App">
      <p>Everything is ok🤓</p>
    </div>
  );
}

export default App;
