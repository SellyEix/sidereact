import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      var1: [],
      var2: [],
      cu1: '',
      cu2: '',
      re: 0,

    }

  }

  addData = () => {
    let c = this.state.var1;
    let d = this.state.var2;
    c.push(this.state.cu1);
    d.push(this.state.cu2);
    let an= this.getCo(c,d);
    this.setState({
      var1: c,
      var2: d,
      re: an,
    })
    console.log(an)
  }

  getCo = (x, y) => {
    var shortestArrayLength = 0;

    if (x.length === y.length) {
      // console.log(x[-1]);
      shortestArrayLength = x.length;
    } else if (x.length > y.length) {
      shortestArrayLength = y.length;
      console.error('x has more items in it, the last ' + (x.length - shortestArrayLength) + ' items will be ignored');
    } else {
      shortestArrayLength = x.length;
      console.error('y has more items in it, the last ' + (y.length - shortestArrayLength) + ' items will be ignored');
    }

    var xy = [];
    var x2 = [];
    var y2 = [];

    for (var j = 0; j < shortestArrayLength; j++) {
      xy.push(x[j] * y[j]);
      x2.push(x[j] * x[j]);
      y2.push(y[j] * y[j]);
    }

    var sum_x = 0;
    var sum_y = 0;
    var sum_xy = 0;
    var sum_x2 = 0;
    var sum_y2 = 0;

    for (var i = 0; i < shortestArrayLength; i++) {
      sum_x += x[i];
      sum_y += y[i];
      sum_xy += xy[i];
      sum_x2 += x2[i];
      sum_y2 += y2[i];
    }

    var step1 = (shortestArrayLength * sum_xy) - (sum_x * sum_y);
    var step2 = (shortestArrayLength * sum_x2) - (sum_x * sum_x);
    var step3 = (shortestArrayLength * sum_y2) - (sum_y * sum_y);
    var step4 = Math.sqrt(step2 * step3);
    var answer = step1 / step4;

    return answer;
  }

  inputChange1 = (event) => {
    let value = event.target.value;
    this.setState({
      cu1: value,
    })
    console.log(this.state.cu1)
  }

  inputChange2 = (event) => {
    let value = event.target.value;
    this.setState({
      cu2: value,
    })
  }

  render() {


    return (
      <div className="App">
        <h1>Let's see if you and your crush can have a future..</h1>
        <p>Please type in YOUR age, weight, and lucky number</p>
        <p>Please type in HIS/HER age, height, and foot length</p>
        <form className='form'>
          <div>
            <p> You:</p>
            <input id="var1" onChange={this.inputChange1}></input>
          </div>
          <div>
            <p> Your Crush:</p>
            
            <input id="var2" onChange={this.inputChange2}></input>
          </div>
          <br />
          <div>
            <button onClick={this.addData}>Submit</button>
            <br />
            <br />
            <button onClick={this.clearData}>Clear</button>
          </div>

        </form>
        <h1>Data Table</h1>
        <div className="data_table">
          <div id="variable1">
            <p>Your Data</p>
            <div id="box1" >
            </div>
          </div>

          <div id="variable2">
            <p>Your Crush's Data</p>
            <div id="box2">
            </div>
          </div>
        </div>
        <p>Scroll down to see the result when you're done</p>
        <br />
        <div id="result">
          <h1>Happy Future Rate:</h1>

          <div id="corellation">
            <p>{this.state.re}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
