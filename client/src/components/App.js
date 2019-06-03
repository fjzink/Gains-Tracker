import React from 'react';

import AppBar from './AppBar';

import '../styles.scss';

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <AppBar />
      </div>
    );
  }
}

export default App;
