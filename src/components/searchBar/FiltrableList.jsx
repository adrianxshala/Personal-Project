import React, { useState, useEffect } from "react";
import Products from "../product/Products";
import SearchBar from "./SearchBar";

const FilterableList = () => {
  const [items, setItems] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const results = items.filter((item) =>
      item.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchString, items]);

  return (
    <div>
      <div className="Search container mx-auto pt-[70px]">
        <SearchBar
          searchString={searchString}
          onSearchChange={setSearchString}
        />
        <hr />
        <Products datas={filteredItems} />
      </div>
    </div>
  );
};

export default FilterableList;
