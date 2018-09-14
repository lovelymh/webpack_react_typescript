import * as React from 'react';
import Test from './Test';

class App extends React.Component {
  render() {
    return(
      <div>
        <Test
          name="mihee"
          age="29"
        />
      </div>
    );
  }
}

export default App;
