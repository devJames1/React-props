// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Classprops from './Classprops';
import Functionprop from './Functionprop';

function App() {
  return (
    <div>
      <Classprops name="learner 1" place="placeX">
        <p>Child Component</p>
      </Classprops>
      <Classprops name="learner 2" place="placeY">
        <button>Click</button>
      </Classprops>
      <Classprops name="learner 3" place="placeZ" />
      <Functionprop name="Learner 4" place="Place A" />
    </div>
  );
}

export default App;
