import React, { useState } from 'react';
import getJoke from '../jokeData';

function Initialize() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState('');
  console.warn(btnText, setBtnText);
  const btnFunction = () => {
    getJoke().then((response) => {
      setJoke({
        setup: response.setup,
        delivery: response.delivery,
      });
    });
    setBtnText('Get Punchline');
  };

  return (
    <div className="App">
      <div id="mainContainer">
        <h2>Jokes!</h2>
        <h3>{joke.setup}</h3>
        <h4>{ btnText !== 'Get Punchline' ? joke.delivery : ''}</h4>
        <div>
          {btnText === 'Get a Joke' || btnText === 'Get a New Joke' ? (
            <button
              onClick={btnFunction}
              type="button"
              className="btn btn-dark"
            >
              {btnText}
            </button>
          ) : (
            <button
              onClick={() => setBtnText('Get a New Joke')}
              type="button"
              className="btn btn-dark"
            >
              {btnText}
            </button>
          )}
          ;
        </div>
      </div>
    </div>
  );
}

export default Initialize;
