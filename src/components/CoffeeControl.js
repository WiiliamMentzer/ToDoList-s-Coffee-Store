import React from "react";
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetails';
import EditCoffeeForm from './EditCoffeeForm';

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      formVisibleonPage:false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = () => {
    console.log("handleClick reached!");
    if (this.state.selectedCoffee != null) {
      console.log("if reached!");
      this.setState ({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      console.log("else reached!");
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  
  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    console.log("handleAddNew reached!");
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedCoffee = (id) => {
    console.log("handleChange reached!");
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    console.log("handleEditingCoffee reached!");
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter (coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState ({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    });
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    console.log("handleDelete reached, COFFEE DELETED!");
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      console.log("Edit reached?");
      currentlyVisibleState = <EditCoffeeForm coffee= {this.state.selectedCoffee} onEditCoffee= {this.handleEditingCoffeeInList} />
      buttonText="Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      console.log("CoffeeDetail reached?");
      currentlyVisibleState = <CoffeeDetail
        coffee={this.state.selectedCoffee}
        onClickingDelete={this.state.handleDeletingCoffee}
        onClickingEdit={this.state.handleEditClock} />
    } else if (this.state.formVisibleOnPage) {
      console.log("NewCoffeeForm reached?");
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />  // show NewCoffeeForm
      buttonText = "return to coffee form";  // our new button
    } else {
      console.log("coffeeList reached?");
      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee} />
      buttonText = "Add Coffee";  // and this is our button
    }

    return (
      <React.Fragment>
        {currentlyVisibleState} {/*this pulls our current visible state*/}
        <button onClick = {this.handleClick}>{buttonText}</button>  {/*handle click and whatever relevant buttontext*/}
      </React.Fragment>
    );
  }
}

export default CoffeeControl;