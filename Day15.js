import React, { useState } from "react";
import "./styles.css";

// ✅ Export this so it can be tested
export const checkPasswordStrength = (password) => {
  let length = password.length == 8 ? true : false;
  let upperCaseLetter = false;
  let lowerCaseLetter = false;
  let atLeastOneDigit = false;
  let specialChar = false;

  for (let i = 0; i <= password.length - 1; i++) {
    if (password[i] == password[i].toUpperCase()) {
      upperCaseLetter = true;
    } else if (password[i] == password[i].toLowerCase()) {
      lowerCaseLetter = true;
    } else if (password[i] >= "0" && password[i] <= "9") {
      atLeastOneDigit = true;
    } else if (!/[a-zA-Z0-9]/.test(password[i])) {
      specialChar = true;
    }
  }
  const allLevels = {
    length,
    upperCaseLetter,
    lowerCaseLetter,
    atLeastOneDigit,
    specialChar,
  };

  const passed = Object.values(allLevels).filter(Boolean).length;
  console.log(passed);
};

const PasswordStrength = () => {
  const [inputText, setInputText] = useState("");
  const [strength, setStrength] = useState(null);

  const passwordString = () => {
    const result = checkPasswordStrength(inputText);
    if (result) {
      setStrength("Level " + result);
    }
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter Password"
        />
        <button onClick={passwordString}>check Strength</button>
        <h1>Strength: {strength}</h1>
      </div>
    </div>
  );
};

export default PasswordStrength;
