import React, { Component } from 'react';
import './love.css';
import { WiredButton, WiredInput, WiredIconButton, WiredCard } from "wired-elements"

class Love extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cu1: '',
            cu2: '',
            re1: 0,
            re2: '',
            data: [""]

        }

    }

    addData = () => {
        this.findGifs(this.state.cu1, this.state.cu2)
    }
    goBack = () => {
        window.history.go(-1)
      }

    findGifs = (name1, name2) => {

        // unirest
        var unirest = require('unirest');
        unirest.get(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`)
            .header("Access-Control-Allow-Methods", "*")
            .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
            .header("X-RapidAPI-Host", "love-calculator.p.rapidapi.com")
            .header("X-RapidAPI-Key", "beaecb154amshe9b9abd4c902598p1b963bjsn0b573071137f")
            .end((result) => {
                console.log(result.body);
                this.setState({
                    data: result.body
                });


            });



    }


    inputChange1 = (event) => {
        let value = event.target.value;
        this.setState({
            cu1: value,
        })
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
                <wired-card style={{ text: 'wrap', width: '600px', height: '600px' }} elevation="3">
                    <h1>Let's see if you and your crush can have a future..</h1>
                    <br />
                    <br />
                    <div className='form'>
                        <div>
                            <p> You:</p>
                            <input value={this.state.cu1} onChange={this.inputChange1}></input>
                        </div>
                        <div>
                            <p> Your Crush:</p>

                            <input value={this.state.cu2} onChange={this.inputChange2}></input>
                        </div>
                        <br />
                        <div>
                            <button disabled={this.state.cu1 == '' || this.state.cu2 == ''} onClick={this.addData}>Submit</button>

                            {/* {(this.state.cu1 == null && this.state.cu2 == null) ? <wired-button onClick={this.addData} disabled>Submit</wired-button> : <wired-button onClick={this.addData}>Submit</wired-button>} */}
                            <br />
                            <br />
                        </div>

                    </div>

                    <p style={{ paddingTop: '30px' }}>Scroll down to see the result when you're done</p>
                </wired-card>
                <br />
                <div >
                    <wired-card style={{ height: '200px', width: '600px' }} elevation="3">
                        <div>
                            <h1>Happy Future Rate:</h1>
                            <p>{this.state.data.percentage}</p>
                            <p>{this.state.data.result}</p>
                            <div id="corellation">
                                <p>{this.state.re}</p>
                            </div>
                        </div>
                    </wired-card>
                </div>
                <br />
                <br />
                <wired-icon-button onClick={this.goBack} class="red">favorite</wired-icon-button>
                
            </div>
        );
    }
}

export default Love;
