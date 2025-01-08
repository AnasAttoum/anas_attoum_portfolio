import { useContext, useRef } from "react"
import { Context } from "../context/themeProvider";

export default function DarkModeToggle() {

  const icon = useRef(null);
  const { mode, toggle } = useContext(Context)

  return (
    <div
      className="iconContainer"
      onClick={() => {
        toggle();
      }}
    >
      <div ref={icon} style={{fontSize:'20px'}}>{mode === "light" ? "🔆" : "🌙"}</div>
    </div>
  );  
}