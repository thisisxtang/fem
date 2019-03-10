const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Heidou",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Kiki",
        animal: "dog",
        breed: "Havanese"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
