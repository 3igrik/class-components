import { Component } from 'react';

class ErrorButton extends Component<unknown, { throwError: boolean }> {
  constructor(props: unknown) {
    super(props);
    this.state = { throwError: false };
  }

  handleClick = () => {
    this.setState({ throwError: true });
  };

  render() {
    if (this.state.throwError) {
      throw new Error('Test Error');
    }

    return <button onClick={this.handleClick}>Throw Error</button>;
  }
}

export default ErrorButton;
