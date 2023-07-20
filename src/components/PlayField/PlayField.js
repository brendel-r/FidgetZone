import React from "react";
import "./PlayField.css";

const PlayField = ({ toggleDarkMode, isDarkMode }) => {
  const [randomColors, setRandomColors] = React.useState([
    "#4CAF50",
    "#FFC107",
    "#2196F3",
    "#FF5722",
    "#9C27B0",
    "#F44336",
    "#00BCD4",
    "#FF9800",
    "#3F51B5",
    "#009688",
    "#E91E63",
    "#8BC34A",
  ]);

  const handleRandomColor = (index) => {
    const colorsCopy = [...randomColors];
    colorsCopy[index] = getRandomColor();
    setRandomColors(colorsCopy);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleShakeButtonClick = () => {

    const playFieldElement = document.getElementById("playField");
    playFieldElement.classList.add("shake");


    setTimeout(() => {
      playFieldElement.classList.remove("shake");
    }, 500); 
  };

  return (
    <div
      id="playField" 
      className={`PlayField ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="light-dark-container">
        <button className="light-dark-btn" onClick={toggleDarkMode}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <div className="color-buttons">
        {randomColors.map((color, index) => (
          <div
            key={index}
            className="color-button"
            style={{ backgroundColor: color }}
            onMouseEnter={() => handleRandomColor(index)}
          ></div>
        ))}
      </div>

      <div className="letter-image">
        <div className="animated-mail">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-border"></div>
            <div className="letter-title"></div>
            <div className="letter-context"></div>
            <div className="letter-stamp">
              <div className="letter-stamp-inner"></div>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
      </div>

      <div className="cat">
        <div className="ear ear--left"></div>
        <div className="ear ear--right"></div>
        <div className="face">
          <div className="eye eye--left">
            <div className="eye-pupil"></div>
          </div>
          <div className="eye eye--right">
            <div className="eye-pupil"></div>
          </div>
          <div className="muzzle"></div>
        </div>
      </div>

      <div>
        <button className="shake-button" onDoubleClick={handleShakeButtonClick}>
         Double Click to Shake
        </button>
      </div>
    </div>
  );
};

export default PlayField;
