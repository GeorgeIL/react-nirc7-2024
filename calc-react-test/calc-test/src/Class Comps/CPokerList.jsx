import React, { Component } from "react";
import EHead2 from "../Elements/ETitleCalc";
import EHeadList from "../Elements/ETitleForPokerPlayerList";

export default class CPokerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePlayers: [
        { id: 555, name: "Giora", chips: 0 },
        { id: 444, name: "Nate", chips: 0 },
      ],
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

  changeID2 = (e) => {
    this.setState({
      idOnChange: Number(e.target.value),
    });
  };

  changeChips2 = (e) => {
    this.setState({
      chipsOnChange: Number(e.target.value),
    });
  };

  addNewPlayer = () => {
    const newId = this.state.id;
    const newName = this.state.name;
    const newChips = this.state.chips;

    console.log(newId);

    // Update state with the new player
    this.setState((prevState) => ({
      activePlayers: [...prevState.activePlayers, { id: newId, name: newName, chips: newChips }],
    }));
  };

  modifyPlayer = () => {
    const newId = this.state.idOnChange;
    const newChips = this.state.chipsOnChange;

    let temp = this.state.activePlayers;

    temp.map((player) => {
      if (player.id == newId) player.chips = player.chips += newChips;
    });
    // Update state with the new player
    this.setState(() => ({
      activePlayers: temp,
    }));
  };

  render() {
    return (
      <div>
        {console.log(this.state.activePlayers)}
        <div
          style={{
            maxWidth: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            border: "dotted purple",
            backgroundColor: "black",
          }}>
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
        <div
          style={{
            maxWidth: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            border: "dotted purple",
            backgroundColor: "black",
          }}>
          {EHeadList}
          <ul>
            {this.state.activePlayers.map((player) => (
              <li key={player.id}>
                ID: {player.id}, Name: {player.name}, Chips: {player.chips}
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            maxWidth: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            border: "dotted purple",
            backgroundColor: "black",
          }}>
          <h1>Add or Remove chips</h1>
          ID: <input type="number" onChange={this.changeID2} /> <br />
          Chips: <input type="number" onChange={this.changeChips2} />
          <br />
          <button
            type="submit"
            style={{
              display: "block",
              margin: "0 auto",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={this.modifyPlayer}>
            Modify Player
          </button>
        </div>
      </div>
    );
  }
}
