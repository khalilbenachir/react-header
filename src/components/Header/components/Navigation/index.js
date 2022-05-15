import React from "react";

import Nav from "./components/Wrapper";
import List from "./components/List";
import Item from "./components/Item";

const Navigatiom = () => {
  return (
    <Nav>
      <List>
        <li>
          <Item href="#">Home</Item>
        </li>
        <li>
          <Item href="#">Shop</Item>
        </li>
        <li>
          <Item href="#">Contact</Item>
        </li>
        <li>
          <Item href="#">About</Item>
        </li>
      </List>
    </Nav>
  );
};

export default Navigatiom;
