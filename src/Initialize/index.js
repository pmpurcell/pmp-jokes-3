import React, { useState } from 'react';

function Initialize() {
  const [btnText, setBtnText] = useState('Get a Joke');
  console.warn(btnText, setBtnText);
  const btnFunction = () => { console.warn('Clicked the button!'); };

  return (
    <div className="App">
      <div id="mainContainer">
        <h2>Jokes!</h2>
        <button onClick={btnFunction} type="button" className="btn btn-dark">{btnText}</button>
      </div>
    </div>
  );
}

export default Initialize;
