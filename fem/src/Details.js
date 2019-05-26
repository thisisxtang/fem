import React, { Component } from "react";
import pf from "petfinder-client";
import Loadable from "react-loadable";
import { navigate } from "@reach/router/lib/history";
import Carousel from "./Carousel";
import Modal from "./Modal";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
}); // refer things from env file

const loading = () => <h1>loading content ... </h1>;
const LoadableContent = Loadable({
  loader: () => import("./AdoptModalContent"),
  loading
});

class Details extends Component {
  state = {
    loading: true,
    showModal: false
  };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }
        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          decription: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      .catch(() => {
        navigate("/");
      });
  }
  render() {
    if (this.state.loading) {
      return <h1>loading</h1>;
    }
    const {
      name,
      animal,
      breed,
      location,
      description,
      media,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <h1>{name}</h1>
        <h2>
          {animal}-{breed} -{location}
        </h2>
        <button onClick={this.toggleModal}>Adopt {name}</button>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <LoadableContent toggleModal={this.toggleModal} name={name} />
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default Details;
