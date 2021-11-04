import React, { useState } from "react";


function Item({ name, category }) {
  const [isInCart, setisInCart] = useState(false)

  function handleInCart() {
    setisInCart(!isInCart)
  }

  const theClass = isInCart ? "in-cart" : ""

  return (
    <li className={theClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleInCart}>{isInCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
