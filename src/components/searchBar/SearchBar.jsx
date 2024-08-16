import React from "react";

const SearchBar = ({ searchString, onSearchChange }) => {
  const handleChange = (evt) => {
    onSearchChange(evt.target.value);
  };

  return (
    <label className="flex justify-center border-solid rounded-md font-montserrat text-lg font-bold">
      Search:
      <input
        className="rounded-md w-[120px] h-6 px-2 py-1 font-ubuntu font-light"
        value={searchString}
        onChange={handleChange}
      />
    </label>
  );
};

export default SearchBar;
