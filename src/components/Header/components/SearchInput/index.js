import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import Form from "./components/Form";
import Icon from "./components/Icon";
import Input from "./components/Input";

const SearchInput = () => {
  return (
    <Form>
      <Input type="text" placeholder="Search" />
      <Icon type="button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Icon>
    </Form>
  );
};

export default SearchInput;
