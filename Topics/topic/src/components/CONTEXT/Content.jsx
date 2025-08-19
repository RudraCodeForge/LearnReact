import React, { useContext } from "react";
import { ThemeContext } from "./Store/Theme";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      style={{
        background: theme === "light" ? "#fafafa" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "200px",
        padding: "20px",
      }}
    >
      <div>
        <ol>
          <li>
            <span className="First">Prop Drilling: </span> Context Api addresses
            prop Drilling components composition is an alternative.
          </li>
          <li>
            <span className="First">Folder Setup: </span> Use a store folder for
            a context file.
          </li>
          <li>
            <span className="First">Initialization: </span>Use
            React.createContext Hook.
          </li>
          <li>
            <span className="First">Provider: </span>Implement with
            contextName.Provider in Components.
          </li>
          <li>
            <span className="First">Access Value: </span>Use the useComtext
            hook.
          </li>
          <li>
            <span className="First">Dynamic Data:</span> Combine context value
            with state.
          </li>
          <li>
            <span className="First">Exports Functions: </span> Context can also
            export functions for actions.{" "}
          </li>
          <li>
            <span className="First">Logic Sepration: </span> This helps keep the
            UI and business logic seprate from each other.
          </li>
        </ol>
      </div>
      <h3>Welcome to the Content Section</h3>
      <p>
        This section is styled dynamically based on the <b>{theme}</b> theme.
      </p>
    </main>
  );
};

export default Content;
