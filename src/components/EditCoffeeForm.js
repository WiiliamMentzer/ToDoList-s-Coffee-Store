import React from "react";
import CoffeeForm from "./CoffeeForm";
import PropTypes from 'prop-types';

function EditCoffeeForm (props) {
  const {coffee} = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({name: event.target.name.value, price: event.target.price.value, roast: event.target.roast.value, origin: event.target.origin.value, id:coffee.id})
  }

  return (
    <React.Fragment>
      <CoffeeForm
      formSubmissionHandler={handleEditCoffeeFormSubmission}
      buttonText="Update Coffee"/>
    </React.Fragment>
  )
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffeeForm;