import React from "react";
import ShoppingList from "./ShoppingList";
import { Button } from "./Button";

class ShoppingListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.input);
    this.setState({ input: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="input"
          value={this.state.input}
        />
        <Button buttonLabel="Add" />
      </form>
    );
  }
}

export default ShoppingListForm;
