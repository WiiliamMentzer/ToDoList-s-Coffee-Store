import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete} = (props);

  return (
    <React.Fragment>
      <h1>Coffee Details:</h1>
      <h3>{coffee.name}</h3>
      <p>Price: ${coffee.price}</p>
      <p><em>Roast: {coffee.roast}</em></p>
      <p><em>Origin: {coffee.origin}</em></p>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={() => onClickingDelete(coffee.id) }>Trash Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;