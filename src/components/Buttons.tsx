import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons: React.FC = () => {
  const navigate = useNavigate();

  function handleHomePageClick() {
    navigate("/");
  }

  function handleContactsPageClick() {
    navigate("/contactsPage");
  }

  return (
    <>
      <button onClick={handleHomePageClick}>Go To Home Page</button>
      <button onClick={handleContactsPageClick}>Go To Contacts Page</button>
    </>
  );
};

export default Buttons;
