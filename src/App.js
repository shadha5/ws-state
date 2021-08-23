import React, { Component } from 'react'
import Counter from './component/Counter';

export class App extends Component {
  state = {show: false,};
  toggel = () => {
    this.setState({show:!this.state.show})
    
  }
  render() {
    return (
      <div>
        <button onClick={this.toggel}> {this.state.show? "hide": "show"} </button>{
          this.state.show ? <Counter/>: "clique pour afficher le compteur "
        }
      </div>
    )
  }
}

export default App
