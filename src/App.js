import React, { useState } from "react";
import "./App.css";
import PlayField from "./components/PlayField/PlayField";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    setThemeMode(!isDarkMode); 
  };

  const setThemeMode = (isDarkMode) => {
    const body = document.body;
    body.className = isDarkMode ? "dark-mode" : "light-mode";
  };

  return (
    <div>
      <header>
        <h1 className={`header-name ${isDarkMode ? "dark-mode" : "light-mode"}`}>
          Fidget Zone
        </h1>
      </header>
      <PlayField toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
