import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { result: 0, num1: "", num2: "" };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.mulT = this.mulT.bind(this);
    this.divD = this.divD.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(evnt) {
    evnt.preventDefault();

    const num1 = parseInt(evnt.target.value);
    this.setState({ num1 });
  }

  setNum2(evnt) {
    evnt.preventDefault();

    const num2 = parseInt(evnt.target.value);
    this.setState({ num2 });
  }
  
  add(evnt) {
    evnt.preventDefault();
    const result = this.state.num1 + this.state.num2;
  
    this.setState({ result });
  }

  subtract(evnt) {
    evnt.preventDefault();
    const result = this.state.num1 - this.state.num2;

    this.setState({ result });
  }

  mulT(evnt) {
    evnt.preventDefault();
    const result = this.state.num1 * this.state.num2;

    this.setState({ result });
  }

  divD(evnt) {
    evnt.preventDefault();
    const result = this.state.num1 / this.state.num2;

    this.setState({ result });
  }

  clear(evnt) {
    evnt.preventDefault();

    this.setState({ result: 0, num1: "", num2: ""});
  }

  render(){
    const { num1, num2, result } = this.state;

    return (
      <div>
        <h1>{result}</h1>
          <br />
            <input onChange={this.setNum1} value={num1} />
          <br />
            <input onChange={this.setNum2} value={num2} />
            <button onClick={this.add}>+</button>
            <button onClick={this.subtract}>-</button>
            <button onClick={this.mulT}>*</button>
            <button onClick={this.divD}>/</button>
        <br />
            <button onClick={this.clear}>Reset!</button>
      </div>
    );
  }

}

export default Calculator;
