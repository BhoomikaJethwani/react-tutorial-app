import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onClickBuy = (event, item) => {
    setActiveItems([...activeItems, item]);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onClickBuy(event, item)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
