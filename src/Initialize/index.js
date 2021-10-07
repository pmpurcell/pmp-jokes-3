import React, { useState } from 'react';
import getJoke from '../jokeData';

function Initialize() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [setupText, setSetupText] = useState('');
  console.warn(btnText, setBtnText);
  const btnFunction = () => {
    getJoke().then((response) => {
      setSetupText(response.setup);
    });
    setBtnText('Get Punchline');
  };

  return (
    <div className="App">
      <div id="mainContainer">
        <h2>Jokes!</h2>
        <h3>{setupText}</h3>
        <button onClick={btnFunction} type="button" className="btn btn-dark">{btnText}</button>
      </div>
    </div>
  );
}

export default Initialize;
