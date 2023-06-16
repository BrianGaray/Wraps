import React, { createContext, useState, useContext } from "react";

export const LastSelectedItemContext = createContext();

export function useLastSelectedItem() {
  return useContext(LastSelectedItemContext);
}

function LastSelectedItemProvider({ children }) {
  const [lastSelectedItem, setLastSelectedItem] = useState(null);

  function getLastSelectedItem() {
    return lastSelectedItem;
  }

  function updateLastSelectedItem(item) {
    setLastSelectedItem(item);
    console.log("Last selected item ID:", item.id);
  }

  const contextValue = {
    getLastSelectedItem,
    updateLastSelectedItem,
  };

  return (
    <LastSelectedItemContext.Provider value={contextValue}>
      {children}
    </LastSelectedItemContext.Provider>
  );
}

export default LastSelectedItemProvider;
