import React from 'react';
import { connect } from 'react-redux';

const PetsShow = ({ pet }) =>
  <div className="col-md-8">
    <h2>{pet.name}</h2>
    <p>{pet.description}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  let pet = state.pets.find(pet => pet.id === parseInt(ownProps.match.params.petId, 10));
  if (!pet){ pet = {} };
  return {pet};
};

export default connect(mapStateToProps)(PetsShow);
