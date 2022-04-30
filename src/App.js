import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


const Body = props => {
  return (
    <div>
  <h1>{props.text}</h1>
  <h1>{props.text2}</h1>
  <h1>{props.myFunc(133, 456)}</h1>
  </div>
  )
};
class Header extends Component {
  render () {
  return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{this.props.title}</h1>
    <div>{this.props.myObj.a}</div>
    <div>{JSON.stringify(this.props.myObj.b)}</div>
    <div>{this.props.myArr[3]}</div>
    <div>{this.props.myFunc(10, 12)}</div>
  </header>
  )
  }
}

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header title="Hello from App" 
      num={5} 
      myArr={[1,2,3,4,5]}
      myFunc={(a, b) => a + b } 
      myObj={{
        a: 5,
        b: 6
      }} 
      />
      <Body
      myFunc={(a, b) => a + b } 
       text = "I am the body" 
       text2="I am also a body"/>
        <Body
      myFunc={(a, b) => a + b } 
       text = "I am the body" 
       text2="I am also a body"/>
    </div>
  );
}
}

export default App;

// Passing Data to a Class Component 
