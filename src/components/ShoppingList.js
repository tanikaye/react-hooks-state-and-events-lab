import React, { useState } from "react";
import Item from "./Item";


function ShoppingList({ items }) {

  const [filterBy, setFilterBy] = useState('All')

  const itemsByCategory = items.filter(item => {
    if (filterBy === "All") {
     return true
  } else if (item.category === filterBy) {
     return true
    }
  })


  function handleChange(e) {
    setFilterBy(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsByCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
