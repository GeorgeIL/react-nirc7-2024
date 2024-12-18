import { Component } from "react";
import EHead2 from "../Elements/ETitleCalc";

export default class CCPlayerInputs extends Component {
  constructor(props) {
    super(props);

    
    };
  }
  changeID = (e) => {
    this.setState({
      id: Number(e.target.value),
    });
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  changeChips = (e) => {
    this.setState({
      chips: Number(e.target.value),
    });
  };
  render() {
    return (
      <div>
        {EHead2}
        ID: <input type="number" onChange={this.changeID} /> <br />
        Name: <input type="text" onChange={this.changeName} /> <br />
        Chips: <input type="number" onChange={this.changeChips} /> <br />
        <button
          type="submit"
          style={{
            display: "block",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={this.addNewPlayer}>
          Add New Player
        </button>
      </div>
    );
  }
}
