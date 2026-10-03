import React from "react";
import { useTheme } from "./ThemeContext";
import sun from "./images/light.jpg";
import moon from "./images/moon.jpg";
import "./style.css"

export default function Header() {
  const { theme, clickHandler } = useTheme();
  return (
    <header className={theme}>
        <h1>This is Header</h1>
      <img src={theme==='light'?sun:moon} onClick={clickHandler} style={{width:"50px"}}/>
    </header>
  );
}
