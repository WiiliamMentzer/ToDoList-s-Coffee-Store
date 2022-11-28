import React from "react";
import Coffee from './Coffee';
import PropTypes from 'prop-types';


function CoffeeList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.coffeeList.map((coffee, index) =>
        <Coffee
        whenCoffeeClicked={ props.onCoffeeSelection }
        name= {coffee.name}
        price= {coffee.price}
        roast= {coffee.roast} 
        origin= {coffee.origin}
        ammount= {coffee.ammount} /> 
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;