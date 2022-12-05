import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h2>Name: {props.name}</h2>
        <h3>Price: ${props.price} /lb.</h3>
        <p><em>Roast: {props.roast}</em></p>
        <p><em>Origin: {props.origin}</em></p>
        <p><em>Ammount Left: {props.ammount} lbs.</em></p>
      </div> 
      {/* <button>+</button>
      <button>-</button> */}
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  ammount: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;