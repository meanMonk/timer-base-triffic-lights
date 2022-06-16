import React, { useState, useCallback, useEffect } from 'react';

// import logo from './logo.svg';/
import './App.scss';
import Controls from './components/controls';
import Lights from './components/lights';

/*
let STATE = [ 'RED', 'YELLOW', 'GREEN' ];
let STATE_COUNTER_TRIGGER = [10, 5, 5];
let counter = 0;
let state = 0;
function init() {
  counter =  STATE_COUNTER_TRIGGER[state];  
  let interval = setInterval(() => {
    counter -= 1 
    console.log(`${STATE[state]} => ${counter}, `);
    if (!counter) {
      clearInterval(interval);
      if (state === 2) {
        state = 0;
      } else {
        state += 1;
      }
      init()
    }
  }, 1000)
}

init();
*/

let STATE = [ 'RED', 'YELLOW', 'GREEN' ];
let STATE_COUNTER_TRIGGER = [ 10, 5, 5 ];

function App() {
  const [ trigger, setTrigger ] = useState(false);
  const [ light, setLight ] = useState(null);
  const [ count, setCount ] = useState(0);
  const [ intevalId, setIntervalId ] = useState(0);

  useEffect(() => {
    let interval;
    let counter = 0;
    let lightState = 0;
    const init = function () {
      counter = STATE_COUNTER_TRIGGER[ lightState ];
      setCount(counter);
      setLight(lightState)
      interval = setInterval(() => {
        counter -= 1
        setCount(counter);
        if (!counter) {
          clearInterval(interval);
          if (lightState === 2) {
            lightState = 0;
          } else {
            lightState += 1;
          }
          setLight(lightState)
          init()
        }
      }, 1000);
      setIntervalId(interval);
    }

    if (trigger) {
      init();
    } else {
      clearInterval(intevalId)
      setLight(null);
      setCount(null);
    }
  }, [ trigger ])

  return (
    <>
      <div className="bg-cyan-200 m-5 p-5 grid grid-cols-2">
        <Controls onStart={() => setTrigger(true)} onEnd={() => setTrigger(false)} />
        <Lights count={count} light={light} />
      </div>
    </>
  );
}

export default App;
