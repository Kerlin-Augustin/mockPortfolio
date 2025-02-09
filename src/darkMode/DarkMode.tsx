import { useEffect, useState } from "react";
import "./DarkMode.css"

function DarkMode() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); 
  }, [darkMode]);

  return (
    <>
      <div className="toggle-theme-wrapper">
        <span>🌞</span>
        <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onChange={() => setDarkMode(prev => !prev)}
            defaultChecked={darkMode}
          />
          <div className="slider round"></div>
        </label>
        <span>🌚</span>
      </div>
    </>
  )
}

export default DarkMode