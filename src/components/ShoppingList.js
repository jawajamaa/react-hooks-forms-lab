import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchChange, onSearchChange] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => item.name.toLowerCase().includes(searchChange.toLowerCase())  
  );

  function handleSearchChange(event) {
    onSearchChange(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      searchChange = { searchChange }
      onSearchChange= { handleSearchChange }
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
