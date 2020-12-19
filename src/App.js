import React, {Component} from 'react';

class App extends Component {
  state = {flag: false}

  test = () => {
      this.setState({flag: this.state.flag});
      console.log('test me', this.state.flag);
  };

    render() {
      console.log('render')
        return (
            <div>
              <button onClick={this.test}>click me {this.state.flag.toString()}</button>

            </div>
        );
    }
}

export default App;