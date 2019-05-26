import React from "react";

const AdoptModalContent = props => (
  <React.Fragment>
    <h1>Make your oath to {props.name}!</h1>
    <div className="button">
      <button onClick={props.toggleModal}>Yes</button>
      <button onClick={props.toggleModal}>Hell yes!</button>
    </div>
  </React.Fragment>
);

export default AdoptModalContent;
