import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickingRemoveBag} = (props);

  return (
    <React.Fragment>
      <h1>Coffee Details:</h1>
      <h3>{coffee.name}</h3>
      <p>Price: ${coffee.price}</p>
      <p><em>Roast: {coffee.roast}</em></p>
      <p><em>Origin: {coffee.origin}</em></p>
      <p><em>Ammount In Stock: {coffee.ammount}</em></p>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={() => onClickingDelete(coffee.id) }>Trash Coffee</button>
      <button onClick={() => onClickingRemoveBag(coffee)}>Sell 1 lb.</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingRemoveBag: PropTypes.func
};

export default CoffeeDetail;