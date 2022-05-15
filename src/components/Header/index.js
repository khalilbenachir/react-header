import React from "react";

import Logo from "./components/Logo";
import Navigatiom from "./components/Navigation";
import SearchInput from "./components/SearchInput";
import Profile from "./components/Profile";
import Conatainer from "./components/Container";

const Header = () => {
  return (
    <Conatainer>
      <Logo />
      <Navigatiom />
      <SearchInput />
      <Profile />
    </Conatainer>
  );
};

export default Header;
