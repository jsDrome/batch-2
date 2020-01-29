import React from 'react';

class Game extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  subtract = () => {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <p>{this.state.count}</p>
          <button onClick={this.add}>Add</button>
          <button onClick={this.subtract}>Subtract</button>
        </React.Fragment>
        <React.Fragment>
          <h1>abcde</h1>
        </React.Fragment>
      </React.Fragment>)
  }
}

export default Game;