import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, onSearchChange] = useState("");


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => item.name.toLowerCase().includes(search.toLowerCase())  
  );

  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit = { onItemFormSubmit }
      />
      <Filter 
      selectedCategory = { selectedCategory }
      onCategoryChange={handleCategoryChange} 
      search = { search }
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
