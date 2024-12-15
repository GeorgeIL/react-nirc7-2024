import React, { Component } from "react";

export default class Calc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: 0,
        };
    }

    runCalc = () => {
        const num1 = Number(document.getElementById("num1").value);
        const num2 = Number(document.getElementById("num2").value);

        // Perform addition and update state
        this.setState({ result: num1 + num2 });
    };
    render() {
        return (
            <>
                Num 1:
                <input type="number" id="num1" style={{ width: 25 }} /> + Num 2:
                <input type="number" id="num2" style={{ width: 25 }} /> <br />
                <button onClick={this.runCalc}>Calc Them :(</button> <br />
                <div style={{ color: "red" }}>Result = {this.state.result}</div>
            </>
        );
    }
}
