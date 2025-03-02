"use client";

import Link from "next/link";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import Menu from "./Menu";

export default function Nav() {
  return (
    <nav className="header-section">
      <div className="container">
        <div className="header-wrapper">
          <NavIcons />
          <SearchBar />
          <Menu />
        </div>
      </div>
    </nav>
  );
}
