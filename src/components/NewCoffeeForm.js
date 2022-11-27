import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import CoffeeForm from "./CoffeeForm";

function NewCoffeeForm(props) {

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <CoffeeForm
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;