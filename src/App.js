import React, { Component } from 'react';
import './App.css';
import Stars from './components/stars';
import Sky from './components/sky';
import Moon from './components/moon';
import Car from './components/car';

class App extends Component {
  constructor(){
    super();
    this.state = {
      brightLine:40
    }
  }

  componentWillMount(){
    let timer = setInterval(()=>{
      let updateLine = this.state.brightLine + 0.02;
      if(updateLine >=60){
        clearInterval(timer);
        timer = null;
      }
      this.setState({
        brightLine: updateLine
      })
    },10)
  }

  render() {
    return (
      <div className="app">
        <Sky>
          <Stars />
          <Moon brightLine={ this.state.brightLine }/>
          <Car />
        </Sky>
      </div>
    );
  }
}

export default App;
