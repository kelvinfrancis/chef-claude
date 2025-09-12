import React from "react";
import chefLogo from "../assets/chef-claude-icon.png";

export default function Header() {
  return (
    <header>
      <img className="logo" src={chefLogo} alt="chef-logo" />
      <h1 className="title">Chef Claude</h1>
    </header>
  );
}
