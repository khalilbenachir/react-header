import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

import Wrapper from "./components/Wrapper";

const Profile = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faBell} />
      <FontAwesomeIcon icon={faUser} />
    </Wrapper>
  );
};

export default Profile;
