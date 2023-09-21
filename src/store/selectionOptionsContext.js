import React, { createContext, useState, useContext } from "react";

// Here I am creating a context for the selection options.

const SelectionOptionsContext = createContext();

export const useSelectionOptions = () => {
  return useContext(SelectionOptionsContext);
};

export const SelectionOptionsProvider = ({ children }) => {
  const options = ["One Dozen", "Two Dozen"];
  const [selectedOption, setSelectedOption] = useState("");

  const value = {
    options,
    selectedOption,
    setSelectedOption,
  };

  return (
    <SelectionOptionsContext.Provider value={value}>
      {children}
    </SelectionOptionsContext.Provider>
  );
};
