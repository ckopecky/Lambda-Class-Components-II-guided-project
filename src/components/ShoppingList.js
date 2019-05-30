import React from "react";
import Item from "./Item";

const ShoppingList = props => {
  return (
    <div className="shopping-list">
      {props.groceries.map(item => {
        return (
          <Item
            item={item}
            toggleItem={props.toggleItem}
            clearComplete={props.clearComplete}
          />
        );
      })}
    </div>
  );
};

export default ShoppingList;
