import React, { Component } from 'react';
import Header from "./components/Header";

type Props = {};

type State = {
  count: number;
};

class App extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      count: 1
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  };

  public increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  };

  public decreaseCount() {
    this.setState({
      count: this.state.count - 1
    });
  };

  public resetCount() {
    this.setState({ count: 1 });
  };

  public render() {
    return (
      <div>
        <Header headerText="I'm a header!" />
        <p>Hello!</p>
        <p>Count = { this.state.count }</p>
        <button onClick={this.increaseCount}>Increase Count!</button>
        <button onClick={this.decreaseCount}>Decrease Count!</button>
        <button onClick={this.resetCount}>Reset Count!</button>
      </div>
    );
  }
}

export default App;
