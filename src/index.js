import React from "react";
import ReactDOM from "react-dom";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import { Button } from "./components/Button";
import "./styles.css";

const groceries = [
  {
    name: "Bananas",
    id: 123,
    purchased: false
  },
  {
    name: "Torillas",
    id: 124,
    purchased: false
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false
  },
  {
    name: "Granola",
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries
    };
  }

  addItem = item => {
    let newItem = { name: item, purchased: false, id: Date.now() };
    console.log(newItem, "newItem");
    const sorted = [...this.state.groceries, newItem].sort(function(a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      return nameA < nameB ? -1 : 1;
    });
    this.setState({ groceries: sorted });
  };

  toggleItem = id => {
    let groceries = this.state.groceries.slice();
    groceries = groceries.map(item => {
      if (item.id === id) {
        item.purchased = !item.purchased;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ groceries });
  };

  clearComplete = id => {
    const filtered = this.state.groceries.filter(item => {
      return item.purchased === false;
    });
    this.setState({ groceries: filtered });
  };

  selectAll = () => {
    const copy = this.state.groceries.map(item => {
      item.purchased = !item.purchased;
      return item;
    });
    this.setState({ groceries: copy });
  };

  render() {
    console.log(this.state);
    if (this.state.groceries.length < 1) {
      return (
        <div className="App">
          <div className="header">
            <h1>Shopping List</h1>
            <ShoppingListForm addItem={this.addItem} />
          </div>
          <h2>Add a grocery list item!</h2>
        </div>
      );
    }
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ShoppingListForm addItem={this.addItem} />
        </div>
        <ShoppingList
          groceries={this.state.groceries}
          toggleItem={this.toggleItem}
        />
        <div>
          <Button
            method={this.clearComplete}
            className="clear-btn"
            buttonLabel="Clear Completed"
          />
          <Button
            method={this.selectAll}
            className="clear-btn"
            buttonLabel="Select All"
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
