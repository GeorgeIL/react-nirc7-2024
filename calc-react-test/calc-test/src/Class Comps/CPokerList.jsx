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

  addNewPlayer = () => {
    const newId = Number(document.getElementById("id").value);
    const newName = document.getElementById("name").value;
    const newChips = Number(document.getElementById("chips").value);

    const newPlayer = { id: newId, name: newName, chips: newChips };

    // Update state with the new player
    this.setState((prevState) => ({
      activePlayers: [...prevState.activePlayers, newPlayer],
    }));
  };

  modifyPlayer = () => {
    const newId = Number(document.getElementById("id2").value);
    const newChips = Number(document.getElementById("chips2").value);

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
          ID: <input type="number" id="id" /> <br />
          Name: <input type="text" id="name" /> <br />
          Chips: <input type="number" id="chips" /> <br />
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
          ID: <input type="number" id="id2" /> <br />
          Chips: <input type="number" id="chips2" /> <br />
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
