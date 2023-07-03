import React from "react";

import { useState } from "react";

export default function EditProfile() {
  let [firstName, setFirstName] = useState("Jane");
  let [lastName, setLastName] = useState("Jacobs");
  let [isInputMode, setInputMode] = useState(false);

  function handleButtonClick(e) {
    e.preventDefault();
    setInputMode(!isInputMode);
  }

  function handleFirstNameInputOnchange(e) {
    e.preventDefault();
    setFirstName(e.target.value);
  }

  function handleLastNameInputOnchange(e) {
    e.preventDefault();
    setLastName(e.target.value);
  }

  return (
    <form>
      <label>
        First name:{" "}
        {isInputMode ? (
          <input value={firstName} onChange={handleFirstNameInputOnchange} />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{" "}
        {isInputMode ? (
          <input value={lastName} onChange={handleLastNameInputOnchange} />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit" onClick={handleButtonClick}>
        Edit Profile
      </button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
