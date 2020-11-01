import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState("Who are you?")
  const handleClick = () => {
    if(text === 'Who are you?') {
      setText("gay");
    }
    else {
      setText("Who are you?");
    }
  }
return (
<React.Fragment>
  <h1>{text}</h1>
  <button className="btn" onClick={handleClick}>
    Click me
  </button>
  </React.Fragment>
  );
};

export default UseStateBasics;
