import * as React from 'react';

interface Props {
  name: string;
  age: string;
}

const Test = ({name, age}: Props) => {
  return(
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <button id="test_button">Test</button>
    </div>
  );
}

export default Test;
