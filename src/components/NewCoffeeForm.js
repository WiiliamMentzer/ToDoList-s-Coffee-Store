import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import CoffeeForm from "./CoffeeForm";

function NewCoffeeForm(props) {

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      price: event.target.price.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      ammount: "130",
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <CoffeeForm
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Add New Coffee" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;