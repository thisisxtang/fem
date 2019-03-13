import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    // return React.createElement("div", {}, [
    //   React.createElement(
    //     "h1",
    //     { onClick: this.handleTitleClick },
    //     "Adopt me!"
    //   ),
    //   React.createElement(Pet, {
    //     name: "Luna",
    //     animal: "dog",
    //     breed: "Havanese"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Heidou",
    //     animal: "dog",
    //     breed: "Havanese"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Kiki",
    //     animal: "dog",
    //     breed: "Havanese"
    //   })
    // ]);
    return (
      <div>
        <h1 onclick={this.handleTitleClick}>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Peper" animal="bird" breed="Cocktatiel" />
        <Pet name="Heidouer" animal="cat" breed="mixed" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
