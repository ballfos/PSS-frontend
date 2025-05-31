import React, { useState }  from 'react';
import './App.css';

function App() {
  const [isPresence, setIsPresence] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <button className={`button-presence ${isPresence ? 'presence' : 'notpresence'}`} onClick={() => setIsPresence(!isPresence)}>
          {isPresence ? "退室する" : "入室する"}
        </button>
      </header>
    </div>
  );
}

export default App;
