"use client";

import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  return (
    <div className="search__wrp">
      <input
        type="text"
        placeholder="Search for"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>
        <i className="fa-solid fa-search"></i>
      </button>
    </div>
  );
}
