import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
        <p><em>{props.roast}</em></p>
        <p><em>{props.origin}</em></p>
        <p><em>{props.ammount}</em></p>
      </div> 
      <button>+</button>
      <button>-</button>
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