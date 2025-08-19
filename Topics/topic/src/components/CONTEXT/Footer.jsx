import React, { useContext } from "react";
import { ThemeContext } from "./Store/Theme";

const Footer=()=> {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      style={{
        background: theme === "light" ? "#ddd" : "#111",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p>© 2025 My Website</p>
    </footer>
  );
}

export default Footer;